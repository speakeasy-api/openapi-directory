import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListUserChannelServerList: readonly ["https://chat.twilio.com"];
export declare class ListUserChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListUserChannelRequest extends SpeakeasyBase {
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
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to read the resources from.
     */
    serviceSid: string;
    /**
     * The SID of the [User](https://www.twilio.com/docs/api/chat/rest/users) to read the User Channel resources from.
     */
    userSid: string;
}
export declare class ListUserChannelListUserChannelResponseMeta extends SpeakeasyBase {
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
export declare class ListUserChannelListUserChannelResponse extends SpeakeasyBase {
    channels?: shared.ChatV1ServiceUserUserChannel[];
    meta?: ListUserChannelListUserChannelResponseMeta;
}
export declare class ListUserChannelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listUserChannelResponse?: ListUserChannelListUserChannelResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
