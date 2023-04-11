import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateMessagePartialRequest extends SpeakeasyBase {
    updateMessagePartialRequest: shared.UpdateMessagePartialRequest;
    /**
     * Automatically added
     */
    id: string;
}
export declare class UpdateMessagePartialResponse extends SpeakeasyBase {
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
