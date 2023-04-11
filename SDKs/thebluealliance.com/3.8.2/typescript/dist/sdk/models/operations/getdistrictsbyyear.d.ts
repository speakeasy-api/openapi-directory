import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDistrictsByYearSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetDistrictsByYearRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * Competition Year (or Season). Must be 4 digits.
     */
    year: number;
}
export declare class GetDistrictsByYearResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    districtLists?: shared.DistrictList[];
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
