import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListTaskChannelServerList: readonly ["https://taskrouter.twilio.com"];
export declare class ListTaskChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListTaskChannelRequest extends SpeakeasyBase {
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
     * The SID of the Workspace with the Task Channel to read.
     */
    workspaceSid: string;
}
export declare class ListTaskChannelListTaskChannelResponseMeta extends SpeakeasyBase {
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
export declare class ListTaskChannelListTaskChannelResponse extends SpeakeasyBase {
    channels?: shared.TaskrouterV1WorkspaceTaskChannel[];
    meta?: ListTaskChannelListTaskChannelResponseMeta;
}
export declare class ListTaskChannelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listTaskChannelResponse?: ListTaskChannelListTaskChannelResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
