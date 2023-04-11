import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
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
     * The total number of Reservations accepted for Tasks in the TaskQueue.
     */
    reservationsAccepted?: number;
    /**
     * The total number of Reservations canceled for Tasks in the TaskQueue.
     */
    reservationsCanceled?: number;
    /**
     * The total number of Reservations created for Tasks in the TaskQueue.
     */
    reservationsCreated?: number;
    /**
     * The total number of Reservations rejected for Tasks in the TaskQueue.
     */
    reservationsRejected?: number;
    /**
     * The total number of Reservations rescinded.
     */
    reservationsRescinded?: number;
    /**
     * The total number of Reservations that timed out for Tasks in the TaskQueue.
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
     * The SID of the TaskQueue from which these statistics were calculated.
     */
    taskQueueSid?: string;
    /**
     * The total number of Tasks canceled in the TaskQueue.
     */
    tasksCanceled?: number;
    /**
     * The total number of Tasks completed in the TaskQueue.
     */
    tasksCompleted?: number;
    /**
     * The total number of Tasks deleted in the TaskQueue.
     */
    tasksDeleted?: number;
    /**
     * The total number of Tasks entered into the TaskQueue.
     */
    tasksEntered?: number;
    /**
     * The total number of Tasks that were moved from one queue to another.
     */
    tasksMoved?: number;
    /**
     * The absolute URL of the TaskQueue statistics resource.
     */
    url?: string;
    /**
     * The relative wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks accepted while in the TaskQueue. Calculation is based on the time when the Tasks entered the TaskQueue.
     */
    waitDurationInQueueUntilAccepted?: any;
    /**
     * The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks accepted while in the TaskQueue. Calculation is based on the time when the Tasks were created. For transfers, the wait duration is counted from the moment ***the Task was created***, and not from when the transfer was initiated.
     */
    waitDurationUntilAccepted?: any;
    /**
     * The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks canceled while in the TaskQueue.
     */
    waitDurationUntilCanceled?: any;
    /**
     * The SID of the Workspace that contains the TaskQueue.
     */
    workspaceSid?: string;
}
