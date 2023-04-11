import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListWorkerServerList: readonly ["https://taskrouter.twilio.com"];
export declare class ListWorkerSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListWorkerRequest extends SpeakeasyBase {
    /**
     * The `activity_name` of the Worker resources to read.
     */
    activityName?: string;
    /**
     * The `activity_sid` of the Worker resources to read.
     */
    activitySid?: string;
    /**
     * Whether to return only Worker resources that are available or unavailable. Can be `true`, `1`, or `yes` to return Worker resources that are available, and `false`, or any value returns the Worker resources that are not available.
     */
    available?: string;
    /**
     * The `friendly_name` of the Worker resources to read.
     */
    friendlyName?: string;
    /**
     * Sorting parameter for Workers
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
     * Filter by Workers that would match an expression on a TaskQueue. This is helpful for debugging which Workers would match a potential queue.
     */
    targetWorkersExpression?: string;
    /**
     * The `friendly_name` of the TaskQueue that the Workers to read are eligible for.
     */
    taskQueueName?: string;
    /**
     * The SID of the TaskQueue that the Workers to read are eligible for.
     */
    taskQueueSid?: string;
    /**
     * The SID of the Workspace with the Workers to read.
     */
    workspaceSid: string;
}
export declare class ListWorkerListWorkerResponseMeta extends SpeakeasyBase {
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
export declare class ListWorkerListWorkerResponse extends SpeakeasyBase {
    meta?: ListWorkerListWorkerResponseMeta;
    workers?: shared.TaskrouterV1WorkspaceWorker[];
}
export declare class ListWorkerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listWorkerResponse?: ListWorkerListWorkerResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
