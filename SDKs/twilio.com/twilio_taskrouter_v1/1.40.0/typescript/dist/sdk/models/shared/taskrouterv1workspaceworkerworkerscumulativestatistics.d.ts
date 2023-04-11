import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker resource.
     */
    accountSid?: string;
    /**
     * The minimum, average, maximum, and total time (in seconds) that Workers spent in each Activity.
     */
    activityDurations?: any[];
    /**
     * The end of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    endTime?: Date;
    /**
     * The total number of Reservations that were accepted.
     */
    reservationsAccepted?: number;
    /**
     * The total number of Reservations that were canceled.
     */
    reservationsCanceled?: number;
    /**
     * The total number of Reservations that were created.
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
     * The beginning of the interval during which these statistics were calculated, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    startTime?: Date;
    /**
     * The absolute URL of the Workers statistics resource.
     */
    url?: string;
    /**
     * The SID of the Workspace that contains the Workers.
     */
    workspaceSid?: string;
}
