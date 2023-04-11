import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteConversationRequest extends SpeakeasyBase {
    /**
     * The ID of the conversation to delete.
     */
    conversationId: string;
    /**
     * The ID of the newest message in the conversation that the client has downloaded.
     */
    messageId: string;
}
export declare class DeleteConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
