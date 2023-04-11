import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnblockConversationRequest extends SpeakeasyBase {
    /**
     * The ID of the conversation to unblock.
     */
    conversationId: string;
}
export declare class UnblockConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
