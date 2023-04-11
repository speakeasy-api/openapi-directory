import { SpeakeasyBase } from "../../../internal/utils";
import { ResourcePolicyInstanceSchedulePolicySchedule } from "./resourcepolicyinstanceschedulepolicyschedule";
/**
 * An InstanceSchedulePolicy specifies when and how frequent certain operations are performed on the instance.
 */
export declare class ResourcePolicyInstanceSchedulePolicy extends SpeakeasyBase {
    /**
     * The expiration time of the schedule. The timestamp is an RFC3339 string.
     */
    expirationTime?: string;
    /**
     * The start time of the schedule. The timestamp is an RFC3339 string.
     */
    startTime?: string;
    /**
     * Specifies the time zone to be used in interpreting Schedule.schedule. The value of this field must be a time zone name from the tz database: https://wikipedia.org/wiki/Tz_database.
     */
    timeZone?: string;
    /**
     * Schedule for an instance operation.
     */
    vmStartSchedule?: ResourcePolicyInstanceSchedulePolicySchedule;
    /**
     * Schedule for an instance operation.
     */
    vmStopSchedule?: ResourcePolicyInstanceSchedulePolicySchedule;
}
