import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTeamsSimpleSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetTeamsSimpleRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * Page number of results to return, zero-indexed
     */
    pageNum: number;
}
export declare class GetTeamsSimpleResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    teamSimples?: shared.TeamSimple[];
}
