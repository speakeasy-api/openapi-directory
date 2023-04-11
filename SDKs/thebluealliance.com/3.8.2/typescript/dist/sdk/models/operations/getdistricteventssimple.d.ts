import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDistrictEventsSimpleSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetDistrictEventsSimpleRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA District Key, eg `2016fim`
     */
    districtKey: string;
}
export declare class GetDistrictEventsSimpleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    eventSimples?: shared.EventSimple[];
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
