import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDistrictEventsSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetDistrictEventsRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA District Key, eg `2016fim`
     */
    districtKey: string;
}
export declare class GetDistrictEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    events?: shared.Event[];
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
