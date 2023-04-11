import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QueryRecipientsRequest extends SpeakeasyBase {
    payload?: shared.QueryRecipientsRequest;
}
export declare class QueryRecipientsResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    apiError?: shared.APIError;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Successful response
     */
    queryRecipientsResponse?: shared.QueryRecipientsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
