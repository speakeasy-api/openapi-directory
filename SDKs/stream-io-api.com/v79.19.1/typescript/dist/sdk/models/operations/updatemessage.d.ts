import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateMessageRequest extends SpeakeasyBase {
    /**
     * Update Message Request
     */
    updateMessageRequest: shared.UpdateMessageRequest;
    /**
     * Automatically added
     */
    id: string;
}
export declare class UpdateMessageResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    apiError?: shared.APIError;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Successful response
     */
    messageResponse?: shared.MessageResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
