import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of the schedule the pipeline runs on.
 */
export declare class GoogleCloudDatapipelinesV1ScheduleSpec extends SpeakeasyBase {
    /**
     * Output only. When the next Scheduler job is going to run.
     */
    nextJobTime?: string;
    /**
     * Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler.
     */
    schedule?: string;
    /**
     * Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed.
     */
    timeZone?: string;
}
/**
 * Details of the schedule the pipeline runs on.
 */
export declare class GoogleCloudDatapipelinesV1ScheduleSpecInput extends SpeakeasyBase {
    /**
     * Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler.
     */
    schedule?: string;
    /**
     * Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed.
     */
    timeZone?: string;
}
