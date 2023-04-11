import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. If reschedule type is SPECIFIC_TIME, must set up schedule_time as well.
 */
export declare enum RescheduleMaintenanceRequestRescheduleTypeEnum {
    RescheduleTypeUnspecified = "RESCHEDULE_TYPE_UNSPECIFIED",
    Immediate = "IMMEDIATE",
    NextAvailableWindow = "NEXT_AVAILABLE_WINDOW",
    SpecificTime = "SPECIFIC_TIME"
}
/**
 * Request for RescheduleMaintenance.
 */
export declare class RescheduleMaintenanceRequest extends SpeakeasyBase {
    /**
     * Required. If reschedule type is SPECIFIC_TIME, must set up schedule_time as well.
     */
    rescheduleType?: RescheduleMaintenanceRequestRescheduleTypeEnum;
    /**
     * Optional. Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in RFC 3339 format, for example `2012-11-15T16:19:00.094Z`.
     */
    scheduleTime?: string;
}
