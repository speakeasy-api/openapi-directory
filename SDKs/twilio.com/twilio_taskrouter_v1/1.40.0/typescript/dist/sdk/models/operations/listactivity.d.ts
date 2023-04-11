import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListActivityServerList: readonly ["https://taskrouter.twilio.com"];
export declare class ListActivitySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListActivityRequest extends SpeakeasyBase {
    /**
     * Whether return only Activity resources that are available or unavailable. A value of `true` returns only available activities. Values of '1' or `yes` also indicate `true`. All other values represent `false` and return activities that are unavailable.
     */
    available?: string;
    /**
     * The `friendly_name` of the Activity resources to read.
     */
    friendlyName?: string;
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
     * The SID of the Workspace with the Activity resources to read.
     */
    workspaceSid: string;
}
export declare class ListActivityListActivityResponseMeta extends SpeakeasyBase {
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
export declare class ListActivityListActivityResponse extends SpeakeasyBase {
    activities?: shared.TaskrouterV1WorkspaceActivity[];
    meta?: ListActivityListActivityResponseMeta;
}
export declare class ListActivityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listActivityResponse?: ListActivityListActivityResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
