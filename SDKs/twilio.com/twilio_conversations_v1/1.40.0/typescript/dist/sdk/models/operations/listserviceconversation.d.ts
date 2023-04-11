import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListServiceConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class ListServiceConversationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListServiceConversationRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Conversation resource is associated with.
     */
    chatServiceSid: string;
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
export declare class ListServiceConversationListServiceConversationResponseMeta extends SpeakeasyBase {
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
export declare class ListServiceConversationListServiceConversationResponse extends SpeakeasyBase {
    conversations?: shared.ConversationsV1ServiceServiceConversation[];
    meta?: ListServiceConversationListServiceConversationResponseMeta;
}
export declare class ListServiceConversationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listServiceConversationResponse?: ListServiceConversationListServiceConversationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
