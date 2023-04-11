import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetMatchRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Match Key, eg `2016nytr_qm1`
     */
    matchKey: string;
}
export declare class GetMatchResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Successful response
     */
    match?: shared.Match;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
