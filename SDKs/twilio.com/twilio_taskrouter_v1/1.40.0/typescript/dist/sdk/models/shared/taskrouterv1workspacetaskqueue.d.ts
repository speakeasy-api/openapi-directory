import { SpeakeasyBase } from "../../../internal/utils";
import { TaskQueueEnumTaskOrderEnum } from "./taskqueueenumtaskorderenum";
/**
 * Created
 */
export declare class TaskrouterV1WorkspaceTaskQueue extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
     */
    accountSid?: string;
    /**
     * The name of the Activity to assign Workers when a task is assigned for them.
     */
    assignmentActivityName?: string;
    /**
     * The SID of the Activity to assign Workers when a task is assigned for them.
     */
    assignmentActivitySid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The URLs of related resources.
     */
    links?: Record<string, any>;
    /**
     * The maximum number of Workers to reserve for the assignment of a task in the queue. Can be an integer between 1 and 50, inclusive and defaults to 1.
     */
    maxReservedWorkers?: number;
    /**
     * The name of the Activity to assign Workers once a task is reserved for them.
     */
    reservationActivityName?: string;
    /**
     * The SID of the Activity to assign Workers once a task is reserved for them.
     */
    reservationActivitySid?: string;
    /**
     * The unique string that we created to identify the TaskQueue resource.
     */
    sid?: string;
    /**
     * A string describing the Worker selection criteria for any Tasks that enter the TaskQueue. For example `'"language" == "spanish"'` If no TargetWorkers parameter is provided, Tasks will wait in the TaskQueue until they are either deleted or moved to another TaskQueue. Additional examples on how to describing Worker selection criteria below. Defaults to 1==1.
     */
    targetWorkers?: string;
    taskOrder?: TaskQueueEnumTaskOrderEnum;
    /**
     * The absolute URL of the TaskQueue resource.
     */
    url?: string;
    /**
     * The SID of the Workspace that contains the TaskQueue.
     */
    workspaceSid?: string;
}
