import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListRoleServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class ListRoleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListRoleRequest extends SpeakeasyBase {
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
export declare class ListRoleListRoleResponseMeta extends SpeakeasyBase {
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
export declare class ListRoleListRoleResponse extends SpeakeasyBase {
    meta?: ListRoleListRoleResponseMeta;
    roles?: shared.IpMessagingV1ServiceRole[];
}
export declare class ListRoleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listRoleResponse?: ListRoleListRoleResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
