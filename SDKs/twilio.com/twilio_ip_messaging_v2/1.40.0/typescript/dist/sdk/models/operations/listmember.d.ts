import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListMemberServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class ListMemberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListMemberRequest extends SpeakeasyBase {
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
export declare class ListMemberListMemberResponseMeta extends SpeakeasyBase {
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
export declare class ListMemberListMemberResponse extends SpeakeasyBase {
    members?: shared.IpMessagingV2ServiceChannelMember[];
    meta?: ListMemberListMemberResponseMeta;
}
export declare class ListMemberResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listMemberResponse?: ListMemberListMemberResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
