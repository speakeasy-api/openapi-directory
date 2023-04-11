import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateUserConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateUserConversationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateUserConversationUpdateUserConversationRequest extends SpeakeasyBase {
    /**
     * The index of the last Message in the Conversation that the Participant has read.
     */
    lastReadMessageIndex?: number;
    /**
     * The date of the last message read in conversation by the user, given in ISO 8601 format.
     */
    lastReadTimestamp?: Date;
    notificationLevel?: shared.UserConversationEnumNotificationLevelEnum;
}
export declare class UpdateUserConversationRequest extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Conversation. This value can be either the `sid` or the `unique_name` of the [Conversation resource](https://www.twilio.com/docs/conversations/api/conversation-resource).
     */
    conversationSid: string;
    requestBody?: UpdateUserConversationUpdateUserConversationRequest;
    /**
     * The unique SID identifier of the [User resource](https://www.twilio.com/docs/conversations/api/user-resource). This value can be either the `sid` or the `identity` of the User resource.
     */
    userSid: string;
}
export declare class UpdateUserConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1UserUserConversation?: shared.ConversationsV1UserUserConversation;
}
