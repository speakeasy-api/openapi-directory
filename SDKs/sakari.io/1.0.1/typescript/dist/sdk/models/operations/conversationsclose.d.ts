import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConversationsCloseSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class ConversationsCloseRequest extends SpeakeasyBase {
    /**
     * Account to apply operations to
     */
    accountId: string;
    /**
     * ID of conversation
     */
    conversationId: string;
}
export declare class ConversationsCloseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    conversationResponse?: shared.ConversationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
