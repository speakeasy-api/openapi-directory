import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateServiceConversationMessageServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateServiceConversationMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateServiceConversationMessageUpdateServiceConversationMessageRequest extends SpeakeasyBase {
    /**
     * A string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set "{}" will be returned.
     */
    attributes?: string;
    /**
     * The channel specific identifier of the message's author. Defaults to `system`.
     */
    author?: string;
    /**
     * The content of the message, can be up to 1,600 characters long.
     */
    body?: string;
    /**
     * The date that this resource was created.
     */
    dateCreated?: Date;
    /**
     * The date that this resource was last updated. `null` if the message has not been edited.
     */
    dateUpdated?: Date;
}
export declare class UpdateServiceConversationMessageRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this message.
     */
    conversationSid: string;
    requestBody?: UpdateServiceConversationMessageUpdateServiceConversationMessageRequest;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum;
}
export declare class UpdateServiceConversationMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ServiceServiceConversationServiceConversationMessage?: shared.ConversationsV1ServiceServiceConversationServiceConversationMessage;
}
