import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateServiceUserConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateServiceUserConversationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateServiceUserConversationUpdateServiceUserConversationRequest extends SpeakeasyBase {
    /**
     * The index of the last Message in the Conversation that the Participant has read.
     */
    lastReadMessageIndex?: number;
    /**
     * The date of the last message read in conversation by the user, given in ISO 8601 format.
     */
    lastReadTimestamp?: Date;
    notificationLevel?: shared.ServiceUserConversationEnumNotificationLevelEnum;
}
export declare class UpdateServiceUserConversationRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Conversation resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique SID identifier of the Conversation. This value can be either the `sid` or the `unique_name` of the [Conversation resource](https://www.twilio.com/docs/conversations/api/conversation-resource).
     */
    conversationSid: string;
    requestBody?: UpdateServiceUserConversationUpdateServiceUserConversationRequest;
    /**
     * The unique SID identifier of the [User resource](https://www.twilio.com/docs/conversations/api/user-resource). This value can be either the `sid` or the `identity` of the User resource.
     */
    userSid: string;
}
export declare class UpdateServiceUserConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ServiceServiceUserServiceUserConversation?: shared.ConversationsV1ServiceServiceUserServiceUserConversation;
}
