import { SpeakeasyBase } from "../../../internal/utils";
import { MonthlySchedule } from "./monthlyschedule";
import { TimeOfDay } from "./timeofday";
import { TimeZone } from "./timezone";
import { WeeklySchedule } from "./weeklyschedule";
/**
 * Required. The frequency unit of this recurring schedule.
 */
export declare enum RecurringScheduleFrequencyEnum {
    FrequencyUnspecified = "FREQUENCY_UNSPECIFIED",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    Daily = "DAILY"
}
/**
 * Sets the time for recurring patch deployments.
 */
export declare class RecurringSchedule extends SpeakeasyBase {
    /**
     * Optional. The end time at which a recurring patch deployment schedule is no longer active.
     */
    endTime?: string;
    /**
     * Required. The frequency unit of this recurring schedule.
     */
    frequency?: RecurringScheduleFrequencyEnum;
    /**
     * Output only. The time the last patch job ran successfully.
     */
    lastExecuteTime?: string;
    /**
     * Represents a monthly schedule. An example of a valid monthly schedule is "on the third Tuesday of the month" or "on the 15th of the month".
     */
    monthly?: MonthlySchedule;
    /**
     * Output only. The time the next patch job is scheduled to run.
     */
    nextExecuteTime?: string;
    /**
     * Optional. The time that the recurring schedule becomes effective. Defaults to `create_time` of the patch deployment.
     */
    startTime?: string;
    /**
     * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
     */
    timeOfDay?: TimeOfDay;
    /**
     * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
     */
    timeZone?: TimeZone;
    /**
     * Represents a weekly schedule.
     */
    weekly?: WeeklySchedule;
}
/**
 * Sets the time for recurring patch deployments.
 */
export declare class RecurringScheduleInput extends SpeakeasyBase {
    /**
     * Optional. The end time at which a recurring patch deployment schedule is no longer active.
     */
    endTime?: string;
    /**
     * Required. The frequency unit of this recurring schedule.
     */
    frequency?: RecurringScheduleFrequencyEnum;
    /**
     * Represents a monthly schedule. An example of a valid monthly schedule is "on the third Tuesday of the month" or "on the 15th of the month".
     */
    monthly?: MonthlySchedule;
    /**
     * Optional. The time that the recurring schedule becomes effective. Defaults to `create_time` of the patch deployment.
     */
    startTime?: string;
    /**
     * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
     */
    timeOfDay?: TimeOfDay;
    /**
     * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
     */
    timeZone?: TimeZone;
    /**
     * Represents a weekly schedule.
     */
    weekly?: WeeklySchedule;
}
