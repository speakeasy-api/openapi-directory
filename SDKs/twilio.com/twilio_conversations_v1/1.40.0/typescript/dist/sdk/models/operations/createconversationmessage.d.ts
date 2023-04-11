import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateConversationMessageServerList: readonly ["https://conversations.twilio.com"];
export declare class CreateConversationMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateConversationMessageCreateConversationMessageRequest extends SpeakeasyBase {
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
     * The unique ID of the multi-channel [Rich Content](https://www.twilio.com/docs/content-api) template, required for template-generated messages.  **Note** that if this field is set, `Body` and `MediaSid` parameters are ignored.
     */
    contentSid?: string;
    /**
     * A structurally valid JSON string that contains values to resolve Rich Content template variables.
     */
    contentVariables?: string;
    /**
     * The date that this resource was created.
     */
    dateCreated?: Date;
    /**
     * The date that this resource was last updated. `null` if the message has not been edited.
     */
    dateUpdated?: Date;
    /**
     * The Media SID to be attached to the new Message.
     */
    mediaSid?: string;
}
export declare class CreateConversationMessageRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this message.
     */
    conversationSid: string;
    requestBody?: CreateConversationMessageCreateConversationMessageRequest;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.ConversationMessageEnumWebhookEnabledTypeEnum;
}
export declare class CreateConversationMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    conversationsV1ConversationConversationMessage?: shared.ConversationsV1ConversationConversationMessage;
}
