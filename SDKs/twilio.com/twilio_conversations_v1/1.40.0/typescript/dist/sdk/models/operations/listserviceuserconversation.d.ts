import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListServiceUserConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class ListServiceUserConversationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListServiceUserConversationRequest extends SpeakeasyBase {
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
    /**
     * The unique SID identifier of the [User resource](https://www.twilio.com/docs/conversations/api/user-resource). This value can be either the `sid` or the `identity` of the User resource.
     */
    userSid: string;
}
export declare class ListServiceUserConversationListServiceUserConversationResponseMeta extends SpeakeasyBase {
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
export declare class ListServiceUserConversationListServiceUserConversationResponse extends SpeakeasyBase {
    conversations?: shared.ConversationsV1ServiceServiceUserServiceUserConversation[];
    meta?: ListServiceUserConversationListServiceUserConversationResponseMeta;
}
export declare class ListServiceUserConversationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listServiceUserConversationResponse?: ListServiceUserConversationListServiceUserConversationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
