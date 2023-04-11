import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDistrictTeamsSimpleSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetDistrictTeamsSimpleRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA District Key, eg `2016fim`
     */
    districtKey: string;
}
export declare class GetDistrictTeamsSimpleResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    teamSimples?: shared.TeamSimple[];
}
