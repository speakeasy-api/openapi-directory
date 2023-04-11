import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QueryMessageFlagsRequest extends SpeakeasyBase {
    payload?: shared.QueryMessageFlagsRequest;
}
export declare class QueryMessageFlagsResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    apiError?: shared.APIError;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Successful response
     */
    queryMessageFlagsResponse?: shared.QueryMessageFlagsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
