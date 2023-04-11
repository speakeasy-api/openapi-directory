import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListUserChannelServerList: readonly ["https://ip-messaging.twilio.com"];
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
    serviceSid: string;
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
    channels?: shared.IpMessagingV2ServiceUserUserChannel[];
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
