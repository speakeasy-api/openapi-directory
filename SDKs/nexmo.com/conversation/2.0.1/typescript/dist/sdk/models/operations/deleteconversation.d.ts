import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteConversationRequest extends SpeakeasyBase {
    /**
     * Conversation ID
     */
    conversationId: string;
}
export declare class DeleteConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success response with empty JSON
     */
    deleteConversation200ApplicationJSONObject?: Record<string, any>;
}
