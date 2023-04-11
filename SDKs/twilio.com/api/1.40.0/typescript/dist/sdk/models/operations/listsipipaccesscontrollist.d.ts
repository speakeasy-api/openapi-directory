import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSipIpAccessControlListServerList: readonly ["https://api.twilio.com"];
export declare class ListSipIpAccessControlListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSipIpAccessControlListRequest extends SpeakeasyBase {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
     */
    accountSid: string;
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
/**
 * OK
 */
export declare class ListSipIpAccessControlListListSipIpAccessControlListResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    ipAccessControlLists?: shared.ApiV2010AccountSipSipIpAccessControlList[];
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListSipIpAccessControlListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSipIpAccessControlListResponse?: ListSipIpAccessControlListListSipIpAccessControlListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
