import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteUserConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class DeleteUserConversationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteUserConversationRequest extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Conversation. This value can be either the `sid` or the `unique_name` of the [Conversation resource](https://www.twilio.com/docs/conversations/api/conversation-resource).
     */
    conversationSid: string;
    /**
     * The unique SID identifier of the [User resource](https://www.twilio.com/docs/conversations/api/user-resource). This value can be either the `sid` or the `identity` of the User resource.
     */
    userSid: string;
}
export declare class DeleteUserConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
