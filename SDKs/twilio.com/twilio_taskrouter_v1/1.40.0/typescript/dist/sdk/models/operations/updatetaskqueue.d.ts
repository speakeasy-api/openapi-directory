import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateTaskQueueServerList: readonly ["https://taskrouter.twilio.com"];
export declare class UpdateTaskQueueSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateTaskQueueUpdateTaskQueueRequest extends SpeakeasyBase {
    /**
     * The SID of the Activity to assign Workers when a task is assigned for them.
     */
    assignmentActivitySid?: string;
    /**
     * A descriptive string that you create to describe the TaskQueue. For example `Support-Tier 1`, `Sales`, or `Escalation`.
     */
    friendlyName?: string;
    /**
     * The maximum number of Workers to create reservations for the assignment of a task while in the queue. Maximum of 50.
     */
    maxReservedWorkers?: number;
    /**
     * The SID of the Activity to assign Workers when a task is reserved for them.
     */
    reservationActivitySid?: string;
    /**
     * A string describing the Worker selection criteria for any Tasks that enter the TaskQueue. For example '"language" == "spanish"' If no TargetWorkers parameter is provided, Tasks will wait in the queue until they are either deleted or moved to another queue. Additional examples on how to describing Worker selection criteria below.
     */
    targetWorkers?: string;
    taskOrder?: shared.TaskQueueEnumTaskOrderEnum;
}
export declare class UpdateTaskQueueRequest extends SpeakeasyBase {
    requestBody?: UpdateTaskQueueUpdateTaskQueueRequest;
    /**
     * The SID of the TaskQueue resource to update.
     */
    sid: string;
    /**
     * The SID of the Workspace with the TaskQueue to update.
     */
    workspaceSid: string;
}
export declare class UpdateTaskQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceTaskQueue?: shared.TaskrouterV1WorkspaceTaskQueue;
}
