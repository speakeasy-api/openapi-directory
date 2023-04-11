import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Immutable. Trigger type of the user-specified Task.
 */
export declare enum GoogleCloudDataplexV1TaskTriggerSpecTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    OnDemand = "ON_DEMAND",
    Recurring = "RECURRING"
}
/**
 * Task scheduling and trigger settings.
 */
export declare class GoogleCloudDataplexV1TaskTriggerSpec extends SpeakeasyBase {
    /**
     * Optional. Prevent the task from executing. This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks.
     */
    disabled?: boolean;
    /**
     * Optional. Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task.
     */
    maxRetries?: number;
    /**
     * Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. This field is required for RECURRING tasks.
     */
    schedule?: string;
    /**
     * Optional. The first run of the task will be after this time. If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING.
     */
    startTime?: string;
    /**
     * Required. Immutable. Trigger type of the user-specified Task.
     */
    type?: GoogleCloudDataplexV1TaskTriggerSpecTypeEnum;
}
