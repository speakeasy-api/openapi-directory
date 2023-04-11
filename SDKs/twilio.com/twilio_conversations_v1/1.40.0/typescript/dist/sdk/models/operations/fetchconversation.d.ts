import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchConversationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchConversationRequest extends SpeakeasyBase {
    /**
     * A 34 character string that uniquely identifies this resource. Can also be the `unique_name` of the Conversation.
     */
    sid: string;
}
export declare class FetchConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1Conversation?: shared.ConversationsV1Conversation;
}
