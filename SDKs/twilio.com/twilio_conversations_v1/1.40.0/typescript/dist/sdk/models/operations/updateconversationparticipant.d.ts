import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateConversationParticipantServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateConversationParticipantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateConversationParticipantUpdateConversationParticipantRequest extends SpeakeasyBase {
    /**
     * An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set "{}" will be returned.
     */
    attributes?: string;
    /**
     * The date that this resource was created.
     */
    dateCreated?: Date;
    /**
     * The date that this resource was last updated.
     */
    dateUpdated?: Date;
    /**
     * A unique string identifier for the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256 characters.
     */
    identity?: string;
    /**
     * Index of last “read” message in the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for the Participant.
     */
    lastReadMessageIndex?: number;
    /**
     * Timestamp of last “read” message in the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for the Participant.
     */
    lastReadTimestamp?: string;
    /**
     * The address of the Twilio phone number that is used in Group MMS. 'null' value will remove it.
     */
    messagingBindingProjectedAddress?: string;
    /**
     * The address of the Twilio phone number that the participant is in contact with. 'null' value will remove it.
     */
    messagingBindingProxyAddress?: string;
    /**
     * The SID of a conversation-level [Role](https://www.twilio.com/docs/conversations/api/role-resource) to assign to the participant.
     */
    roleSid?: string;
}
export declare class UpdateConversationParticipantRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this participant.
     */
    conversationSid: string;
    requestBody?: UpdateConversationParticipantUpdateConversationParticipantRequest;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.ConversationParticipantEnumWebhookEnabledTypeEnum;
}
export declare class UpdateConversationParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ConversationConversationParticipant?: shared.ConversationsV1ConversationConversationParticipant;
}
