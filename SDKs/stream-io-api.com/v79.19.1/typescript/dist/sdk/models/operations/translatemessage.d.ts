import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TranslateMessageRequest extends SpeakeasyBase {
    translateMessageRequest: shared.TranslateMessageRequest;
    /**
     * Automatically added
     */
    id: string;
}
export declare class TranslateMessageResponse extends SpeakeasyBase {
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
