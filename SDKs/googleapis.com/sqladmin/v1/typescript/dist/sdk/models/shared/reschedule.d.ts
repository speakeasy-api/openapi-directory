import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The type of the reschedule.
 */
export declare enum RescheduleRescheduleTypeEnum {
    RescheduleTypeUnspecified = "RESCHEDULE_TYPE_UNSPECIFIED",
    Immediate = "IMMEDIATE",
    NextAvailableWindow = "NEXT_AVAILABLE_WINDOW",
    SpecificTime = "SPECIFIC_TIME"
}
export declare class Reschedule extends SpeakeasyBase {
    /**
     * Required. The type of the reschedule.
     */
    rescheduleType?: RescheduleRescheduleTypeEnum;
    /**
     * Optional. Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    scheduleTime?: string;
}
