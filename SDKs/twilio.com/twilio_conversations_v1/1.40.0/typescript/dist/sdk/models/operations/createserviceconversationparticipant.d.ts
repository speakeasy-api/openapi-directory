import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateServiceConversationParticipantServerList: readonly ["https://conversations.twilio.com"];
export declare class CreateServiceConversationParticipantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateServiceConversationParticipantCreateServiceConversationParticipantRequest extends SpeakeasyBase {
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
     * A unique string identifier for the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversation SDK to communicate. Limited to 256 characters.
     */
    identity?: string;
    /**
     * The address of the participant's device, e.g. a phone or WhatsApp number. Together with the Proxy address, this determines a participant uniquely. This field (with proxy_address) is only null when the participant is interacting from an SDK endpoint (see the 'identity' field).
     */
    messagingBindingAddress?: string;
    /**
     * The address of the Twilio phone number that is used in Group MMS. Communication mask for the Conversation participant with Identity.
     */
    messagingBindingProjectedAddress?: string;
    /**
     * The address of the Twilio phone number (or WhatsApp number) that the participant is in contact with. This field, together with participant address, is only null when the participant is interacting from an SDK endpoint (see the 'identity' field).
     */
    messagingBindingProxyAddress?: string;
    /**
     * The SID of a conversation-level [Role](https://www.twilio.com/docs/conversations/api/role-resource) to assign to the participant.
     */
    roleSid?: string;
}
export declare class CreateServiceConversationParticipantRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this participant.
     */
    conversationSid: string;
    requestBody?: CreateServiceConversationParticipantCreateServiceConversationParticipantRequest;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnum;
}
export declare class CreateServiceConversationParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    conversationsV1ServiceServiceConversationServiceConversationParticipant?: shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant;
}
