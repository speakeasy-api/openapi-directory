import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListInviteServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class ListInviteSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListInviteRequest extends SpeakeasyBase {
    channelSid: string;
    identity?: string[];
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
}
export declare class ListInviteListInviteResponseMeta extends SpeakeasyBase {
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
export declare class ListInviteListInviteResponse extends SpeakeasyBase {
    invites?: shared.IpMessagingV2ServiceChannelInvite[];
    meta?: ListInviteListInviteResponseMeta;
}
export declare class ListInviteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listInviteResponse?: ListInviteListInviteResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
