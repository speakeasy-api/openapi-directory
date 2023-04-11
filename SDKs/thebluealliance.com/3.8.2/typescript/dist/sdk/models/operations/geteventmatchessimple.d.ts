import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventMatchesSimpleSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetEventMatchesSimpleRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Event Key, eg `2016nytr`
     */
    eventKey: string;
}
export declare class GetEventMatchesSimpleResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Successful response
     */
    matchSimples?: shared.MatchSimple[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
