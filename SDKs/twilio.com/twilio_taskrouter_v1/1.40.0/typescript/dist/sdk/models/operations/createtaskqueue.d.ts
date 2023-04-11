import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateTaskQueueServerList: readonly ["https://taskrouter.twilio.com"];
export declare class CreateTaskQueueSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateTaskQueueCreateTaskQueueRequest extends SpeakeasyBase {
    /**
     * The SID of the Activity to assign Workers when a task is assigned to them.
     */
    assignmentActivitySid?: string;
    /**
     * A descriptive string that you create to describe the TaskQueue. For example `Support-Tier 1`, `Sales`, or `Escalation`.
     */
    friendlyName: string;
    /**
     * The maximum number of Workers to reserve for the assignment of a Task in the queue. Can be an integer between 1 and 50, inclusive and defaults to 1.
     */
    maxReservedWorkers?: number;
    /**
     * The SID of the Activity to assign Workers when a task is reserved for them.
     */
    reservationActivitySid?: string;
    /**
     * A string that describes the Worker selection criteria for any Tasks that enter the TaskQueue. For example, `'"language" == "spanish"'`. The default value is `1==1`. If this value is empty, Tasks will wait in the TaskQueue until they are deleted or moved to another TaskQueue. For more information about Worker selection, see [Describing Worker selection criteria](https://www.twilio.com/docs/taskrouter/api/taskqueues#target-workers).
     */
    targetWorkers?: string;
    taskOrder?: shared.TaskQueueEnumTaskOrderEnum;
}
export declare class CreateTaskQueueRequest extends SpeakeasyBase {
    requestBody?: CreateTaskQueueCreateTaskQueueRequest;
    /**
     * The SID of the Workspace that the new TaskQueue belongs to.
     */
    workspaceSid: string;
}
export declare class CreateTaskQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    taskrouterV1WorkspaceTaskQueue?: shared.TaskrouterV1WorkspaceTaskQueue;
}
