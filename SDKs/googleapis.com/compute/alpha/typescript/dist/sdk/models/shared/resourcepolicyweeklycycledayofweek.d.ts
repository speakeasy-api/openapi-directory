import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines a schedule that runs on specific days of the week. Specify one or more days. The following options are available: MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY.
 */
export declare enum ResourcePolicyWeeklyCycleDayOfWeekDayEnum {
    Friday = "FRIDAY",
    Invalid = "INVALID",
    Monday = "MONDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY",
    Thursday = "THURSDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY"
}
export declare class ResourcePolicyWeeklyCycleDayOfWeek extends SpeakeasyBase {
    /**
     * Defines a schedule that runs on specific days of the week. Specify one or more days. The following options are available: MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY.
     */
    day?: ResourcePolicyWeeklyCycleDayOfWeekDayEnum;
    /**
     * [Output only] Duration of the time window, automatically chosen to be smallest possible in the given scenario.
     */
    duration?: string;
    /**
     * Time within the window to start the operations. It must be in format "HH:MM", where HH : [00-23] and MM : [00-00] GMT.
     */
    startTime?: string;
}
