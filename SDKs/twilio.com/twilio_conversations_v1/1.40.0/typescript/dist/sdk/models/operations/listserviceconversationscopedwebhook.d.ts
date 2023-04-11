import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListServiceConversationScopedWebhookServerList: readonly ["https://conversations.twilio.com"];
export declare class ListServiceConversationScopedWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListServiceConversationScopedWebhookRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this webhook.
     */
    conversationSid: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
export declare class ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse extends SpeakeasyBase {
    meta?: ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta;
    webhooks?: shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook[];
}
export declare class ListServiceConversationScopedWebhookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listServiceConversationScopedWebhookResponse?: ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
