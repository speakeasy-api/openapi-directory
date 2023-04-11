import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListIpAccessControlListServerList: readonly ["https://trunking.twilio.com"];
export declare class ListIpAccessControlListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListIpAccessControlListRequest extends SpeakeasyBase {
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
     * The SID of the Trunk from which to read the IP Access Control Lists.
     */
    trunkSid: string;
}
export declare class ListIpAccessControlListListIpAccessControlListResponseMeta extends SpeakeasyBase {
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
export declare class ListIpAccessControlListListIpAccessControlListResponse extends SpeakeasyBase {
    ipAccessControlLists?: shared.TrunkingV1TrunkIpAccessControlList[];
    meta?: ListIpAccessControlListListIpAccessControlListResponseMeta;
}
export declare class ListIpAccessControlListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listIpAccessControlListResponse?: ListIpAccessControlListListIpAccessControlListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
