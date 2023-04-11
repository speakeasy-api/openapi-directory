import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchServiceConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchServiceConversationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchServiceConversationRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Conversation resource is associated with.
     */
    chatServiceSid: string;
    /**
     * A 34 character string that uniquely identifies this resource. Can also be the `unique_name` of the Conversation.
     */
    sid: string;
}
export declare class FetchServiceConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ServiceServiceConversation?: shared.ConversationsV1ServiceServiceConversation;
}
