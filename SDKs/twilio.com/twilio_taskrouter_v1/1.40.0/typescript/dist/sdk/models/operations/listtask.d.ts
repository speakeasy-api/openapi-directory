import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListTaskServerList: readonly ["https://taskrouter.twilio.com"];
export declare class ListTaskSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListTaskRequest extends SpeakeasyBase {
    /**
     * The `assignment_status` of the Tasks you want to read. Can be: `pending`, `reserved`, `assigned`, `canceled`, `wrapping`, or `completed`. Returns all Tasks in the Workspace with the specified `assignment_status`.
     */
    assignmentStatus?: string[];
    /**
     * The attributes of the Tasks to read. Returns the Tasks that match the attributes specified in this parameter.
     */
    evaluateTaskAttributes?: string;
    /**
     * Whether to read Tasks with addons. If `true`, returns only Tasks with addons. If `false`, returns only Tasks without addons.
     */
    hasAddons?: boolean;
    /**
     * How to order the returned Task resources. y default, Tasks are sorted by ascending DateCreated. This value is specified as: `Attribute:Order`, where `Attribute` can be either `Priority` or `DateCreated` and `Order` can be either `asc` or `desc`. For example, `Priority:desc` returns Tasks ordered in descending order of their Priority. Multiple sort orders can be specified in a comma-separated list such as `Priority:desc,DateCreated:asc`, which returns the Tasks in descending Priority order and ascending DateCreated Order.
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
     * The priority value of the Tasks to read. Returns the list of all Tasks in the Workspace with the specified priority.
     */
    priority?: number;
    /**
     * The `friendly_name` of the TaskQueue with the Tasks to read. Returns the Tasks waiting in the TaskQueue identified by this friendly name.
     */
    taskQueueName?: string;
    /**
     * The SID of the TaskQueue with the Tasks to read. Returns the Tasks waiting in the TaskQueue identified by this SID.
     */
    taskQueueSid?: string;
    /**
     * The friendly name of the Workflow with the Tasks to read. Returns the Tasks controlled by the Workflow identified by this friendly name.
     */
    workflowName?: string;
    /**
     * The SID of the Workflow with the Tasks to read. Returns the Tasks controlled by the Workflow identified by this SID.
     */
    workflowSid?: string;
    /**
     * The SID of the Workspace with the Tasks to read.
     */
    workspaceSid: string;
}
export declare class ListTaskListTaskResponseMeta extends SpeakeasyBase {
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
export declare class ListTaskListTaskResponse extends SpeakeasyBase {
    meta?: ListTaskListTaskResponseMeta;
    tasks?: shared.TaskrouterV1WorkspaceTask[];
}
export declare class ListTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listTaskResponse?: ListTaskListTaskResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
