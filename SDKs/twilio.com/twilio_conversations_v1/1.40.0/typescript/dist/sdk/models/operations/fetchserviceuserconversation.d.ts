import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchServiceUserConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchServiceUserConversationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchServiceUserConversationRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Conversation resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique SID identifier of the Conversation. This value can be either the `sid` or the `unique_name` of the [Conversation resource](https://www.twilio.com/docs/conversations/api/conversation-resource).
     */
    conversationSid: string;
    /**
     * The unique SID identifier of the [User resource](https://www.twilio.com/docs/conversations/api/user-resource). This value can be either the `sid` or the `identity` of the User resource.
     */
    userSid: string;
}
export declare class FetchServiceUserConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ServiceServiceUserServiceUserConversation?: shared.ConversationsV1ServiceServiceUserServiceUserConversation;
}
