import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListTaskQueueServerList: readonly ["https://taskrouter.twilio.com"];
export declare class ListTaskQueueSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListTaskQueueRequest extends SpeakeasyBase {
    /**
     * The attributes of the Workers to read. Returns the TaskQueues with Workers that match the attributes specified in this parameter.
     */
    evaluateWorkerAttributes?: string;
    /**
     * The `friendly_name` of the TaskQueue resources to read.
     */
    friendlyName?: string;
    /**
     * Sorting parameter for TaskQueues
     */
    ordering?: string;
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
     * The SID of the Worker with the TaskQueue resources to read.
     */
    workerSid?: string;
    /**
     * The SID of the Workspace with the TaskQueue to read.
     */
    workspaceSid: string;
}
export declare class ListTaskQueueListTaskQueueResponseMeta extends SpeakeasyBase {
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
export declare class ListTaskQueueListTaskQueueResponse extends SpeakeasyBase {
    meta?: ListTaskQueueListTaskQueueResponseMeta;
    taskQueues?: shared.TaskrouterV1WorkspaceTaskQueue[];
}
export declare class ListTaskQueueResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listTaskQueueResponse?: ListTaskQueueListTaskQueueResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
