import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchConversationMessageServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchConversationMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchConversationMessageRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this message.
     */
    conversationSid: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
}
export declare class FetchConversationMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ConversationConversationMessage?: shared.ConversationsV1ConversationConversationMessage;
}
