import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListWorkerChannelServerList: readonly ["https://taskrouter.twilio.com"];
export declare class ListWorkerChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListWorkerChannelRequest extends SpeakeasyBase {
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
     * The SID of the Worker with the WorkerChannels to read.
     */
    workerSid: string;
    /**
     * The SID of the Workspace with the WorkerChannels to read.
     */
    workspaceSid: string;
}
export declare class ListWorkerChannelListWorkerChannelResponseMeta extends SpeakeasyBase {
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
export declare class ListWorkerChannelListWorkerChannelResponse extends SpeakeasyBase {
    channels?: shared.TaskrouterV1WorkspaceWorkerWorkerChannel[];
    meta?: ListWorkerChannelListWorkerChannelResponseMeta;
}
export declare class ListWorkerChannelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listWorkerChannelResponse?: ListWorkerChannelListWorkerChannelResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
