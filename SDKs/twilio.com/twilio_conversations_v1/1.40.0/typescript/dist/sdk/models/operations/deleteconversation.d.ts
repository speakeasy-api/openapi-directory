import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const DeleteConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class DeleteConversationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteConversationRequest extends SpeakeasyBase {
    /**
     * A 34 character string that uniquely identifies this resource. Can also be the `unique_name` of the Conversation.
     */
    sid: string;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.ConversationEnumWebhookEnabledTypeEnum;
}
export declare class DeleteConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
