import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventInsightsSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetEventInsightsRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Event Key, eg `2016nytr`
     */
    eventKey: string;
}
export declare class GetEventInsightsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    eventInsights?: shared.EventInsights;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
