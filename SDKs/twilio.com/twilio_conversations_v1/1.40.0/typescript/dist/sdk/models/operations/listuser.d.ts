import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListUserServerList: readonly ["https://conversations.twilio.com"];
export declare class ListUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListUserRequest extends SpeakeasyBase {
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
export declare class ListUserListUserResponseMeta extends SpeakeasyBase {
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
export declare class ListUserListUserResponse extends SpeakeasyBase {
    meta?: ListUserListUserResponseMeta;
    users?: shared.ConversationsV1User[];
}
export declare class ListUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listUserResponse?: ListUserListUserResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
