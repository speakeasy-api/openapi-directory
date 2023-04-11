import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMatchSimpleSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetMatchSimpleRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Match Key, eg `2016nytr_qm1`
     */
    matchKey: string;
}
export declare class GetMatchSimpleResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Successful response
     */
    matchSimple?: shared.MatchSimple;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
