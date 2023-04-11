import { SpeakeasyBase } from "../../../internal/utils";
import { Execution } from "./execution";
import { ExecutionTemplate } from "./executiontemplate";
export declare enum ScheduleStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Paused = "PAUSED",
    Disabled = "DISABLED",
    UpdateFailed = "UPDATE_FAILED",
    Initializing = "INITIALIZING",
    Deleting = "DELETING"
}
/**
 * The definition of a schedule.
 */
export declare class Schedule extends SpeakeasyBase {
    /**
     * Output only. Time the schedule was created.
     */
    createTime?: string;
    /**
     * Cron-tab formatted schedule by which the job will execute. Format: minute, hour, day of month, month, day of week, e.g. `0 0 * * WED` = every Wednesday More examples: https://crontab.guru/examples.html
     */
    cronSchedule?: string;
    /**
     * A brief description of this environment.
     */
    description?: string;
    /**
     * Output only. Display name used for UI purposes. Name can only contain alphanumeric characters, hyphens `-`, and underscores `_`.
     */
    displayName?: string;
    /**
     * The description a notebook execution workload.
     */
    executionTemplate?: ExecutionTemplate;
    /**
     * Output only. The name of this schedule. Format: `projects/{project_id}/locations/{location}/schedules/{schedule_id}`
     */
    name?: string;
    /**
     * Output only. The most recent execution names triggered from this schedule and their corresponding states.
     */
    recentExecutions?: Execution[];
    state?: ScheduleStateEnum;
    /**
     * Timezone on which the cron_schedule. The value of this field must be a time zone name from the tz database. TZ Database: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones Note that some time zones include a provision for daylight savings time. The rules for daylight saving time are determined by the chosen tz. For UTC use the string "utc". If a time zone is not specified, the default will be in UTC (also known as GMT).
     */
    timeZone?: string;
    /**
     * Output only. Time the schedule was last updated.
     */
    updateTime?: string;
}
/**
 * The definition of a schedule.
 */
export declare class ScheduleInput extends SpeakeasyBase {
    /**
     * Cron-tab formatted schedule by which the job will execute. Format: minute, hour, day of month, month, day of week, e.g. `0 0 * * WED` = every Wednesday More examples: https://crontab.guru/examples.html
     */
    cronSchedule?: string;
    /**
     * A brief description of this environment.
     */
    description?: string;
    /**
     * The description a notebook execution workload.
     */
    executionTemplate?: ExecutionTemplate;
    state?: ScheduleStateEnum;
    /**
     * Timezone on which the cron_schedule. The value of this field must be a time zone name from the tz database. TZ Database: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones Note that some time zones include a provision for daylight savings time. The rules for daylight saving time are determined by the chosen tz. For UTC use the string "utc". If a time zone is not specified, the default will be in UTC (also known as GMT).
     */
    timeZone?: string;
}
