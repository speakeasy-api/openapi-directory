import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class TaskrouterV1WorkspaceWorkspaceCumulativeStatistics extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workspace resource.
     */
    accountSid?: string;
    /**
     * The average time in seconds between Task creation and acceptance.
     */
    avgTaskAcceptanceTime?: number;
    /**
     * The end of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    endTime?: Date;
    /**
     * The total number of Reservations accepted by Workers.
     */
    reservationsAccepted?: number;
    /**
     * The total number of Reservations that were canceled.
     */
    reservationsCanceled?: number;
    /**
     * The total number of Reservations that were created for Workers.
     */
    reservationsCreated?: number;
    /**
     * The total number of Reservations that were rejected.
     */
    reservationsRejected?: number;
    /**
     * The total number of Reservations that were rescinded.
     */
    reservationsRescinded?: number;
    /**
     * The total number of Reservations that were timed out.
     */
    reservationsTimedOut?: number;
    /**
     * A list of objects that describe the number of Tasks canceled and reservations accepted above and below the thresholds specified in seconds.
     */
    splitByWaitTime?: any;
    /**
     * The beginning of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    startTime?: Date;
    /**
     * The total number of Tasks that were canceled.
     */
    tasksCanceled?: number;
    /**
     * The total number of Tasks that were completed.
     */
    tasksCompleted?: number;
    /**
     * The total number of Tasks created.
     */
    tasksCreated?: number;
    /**
     * The total number of Tasks that were deleted.
     */
    tasksDeleted?: number;
    /**
     * The total number of Tasks that were moved from one queue to another.
     */
    tasksMoved?: number;
    /**
     * The total number of Tasks that were timed out of their Workflows (and deleted).
     */
    tasksTimedOutInWorkflow?: number;
    /**
     * The absolute URL of the Workspace statistics resource.
     */
    url?: string;
    /**
     * The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks that were accepted.
     */
    waitDurationUntilAccepted?: any;
    /**
     * The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks that were canceled.
     */
    waitDurationUntilCanceled?: any;
    /**
     * The SID of the Workspace.
     */
    workspaceSid?: string;
}
