import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class TaskrouterV1WorkspaceWorkerWorkerChannel extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker resource.
     */
    accountSid?: string;
    /**
     * The total number of Tasks assigned to Worker for the TaskChannel type.
     */
    assignedTasks?: number;
    /**
     * Whether the Worker should receive Tasks of the TaskChannel type.
     */
    available?: boolean;
    /**
     * The current percentage of capacity the TaskChannel has available. Can be a number between `0` and `100`. A value of `0` indicates that TaskChannel has no capacity available and a value of `100` means the  Worker is available to receive any Tasks of this TaskChannel type.
     */
    availableCapacityPercentage?: number;
    /**
     * The current configured capacity for the WorkerChannel. TaskRouter will not create any reservations after the assigned Tasks for the Worker reaches the value.
     */
    configuredCapacity?: number;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * The unique string that we created to identify the WorkerChannel resource.
     */
    sid?: string;
    /**
     * The SID of the TaskChannel.
     */
    taskChannelSid?: string;
    /**
     * The unique name of the TaskChannel, such as `voice` or `sms`.
     */
    taskChannelUniqueName?: string;
    /**
     * The absolute URL of the WorkerChannel resource.
     */
    url?: string;
    /**
     * The SID of the Worker that contains the WorkerChannel.
     */
    workerSid?: string;
    /**
     * The SID of the Workspace that contains the WorkerChannel.
     */
    workspaceSid?: string;
}
