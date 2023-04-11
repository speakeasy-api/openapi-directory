import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListUserConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class ListUserConversationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListUserConversationRequest extends SpeakeasyBase {
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
export declare class ListUserConversationListUserConversationResponseMeta extends SpeakeasyBase {
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
export declare class ListUserConversationListUserConversationResponse extends SpeakeasyBase {
    conversations?: shared.ConversationsV1UserUserConversation[];
    meta?: ListUserConversationListUserConversationResponseMeta;
}
export declare class ListUserConversationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listUserConversationResponse?: ListUserConversationListUserConversationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
