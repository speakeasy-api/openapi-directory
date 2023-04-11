import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventRankingsSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetEventRankingsRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Event Key, eg `2016nytr`
     */
    eventKey: string;
}
export declare class GetEventRankingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    eventRanking?: shared.EventRanking;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
