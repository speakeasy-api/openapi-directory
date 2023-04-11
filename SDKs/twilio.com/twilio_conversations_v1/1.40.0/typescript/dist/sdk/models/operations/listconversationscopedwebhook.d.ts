import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListConversationScopedWebhookServerList: readonly ["https://conversations.twilio.com"];
export declare class ListConversationScopedWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListConversationScopedWebhookRequest extends SpeakeasyBase {
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
export declare class ListConversationScopedWebhookListConversationScopedWebhookResponseMeta extends SpeakeasyBase {
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
export declare class ListConversationScopedWebhookListConversationScopedWebhookResponse extends SpeakeasyBase {
    meta?: ListConversationScopedWebhookListConversationScopedWebhookResponseMeta;
    webhooks?: shared.ConversationsV1ConversationConversationScopedWebhook[];
}
export declare class ListConversationScopedWebhookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listConversationScopedWebhookResponse?: ListConversationScopedWebhookListConversationScopedWebhookResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
