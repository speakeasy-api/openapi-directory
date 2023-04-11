import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateConversationMessageServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateConversationMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateConversationMessageUpdateConversationMessageRequest extends SpeakeasyBase {
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
export declare class UpdateConversationMessageRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this message.
     */
    conversationSid: string;
    requestBody?: UpdateConversationMessageUpdateConversationMessageRequest;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.ConversationMessageEnumWebhookEnabledTypeEnum;
}
export declare class UpdateConversationMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ConversationConversationMessage?: shared.ConversationsV1ConversationConversationMessage;
}
