import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const DeleteConversationMessageServerList: readonly ["https://conversations.twilio.com"];
export declare class DeleteConversationMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteConversationMessageRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this message.
     */
    conversationSid: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.ConversationMessageEnumWebhookEnabledTypeEnum;
}
export declare class DeleteConversationMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
