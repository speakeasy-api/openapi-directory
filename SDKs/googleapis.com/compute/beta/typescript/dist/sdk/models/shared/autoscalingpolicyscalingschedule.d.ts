import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Scaling based on user-defined schedule. The message describes a single scaling schedule. A scaling schedule changes the minimum number of VM instances an autoscaler can recommend, which can trigger scaling out.
 */
export declare class AutoscalingPolicyScalingSchedule extends SpeakeasyBase {
    /**
     * A description of a scaling schedule.
     */
    description?: string;
    /**
     * A boolean value that specifies whether a scaling schedule can influence autoscaler recommendations. If set to true, then a scaling schedule has no effect. This field is optional, and its value is false by default.
     */
    disabled?: boolean;
    /**
     * The duration of time intervals, in seconds, for which this scaling schedule is to run. The minimum allowed value is 300. This field is required.
     */
    durationSec?: number;
    /**
     * The minimum number of VM instances that the autoscaler will recommend in time intervals starting according to schedule. This field is required.
     */
    minRequiredReplicas?: number;
    /**
     * The start timestamps of time intervals when this scaling schedule is to provide a scaling signal. This field uses the extended cron format (with an optional year field). The expression can describe a single timestamp if the optional year is set, in which case the scaling schedule runs once. The schedule is interpreted with respect to time_zone. This field is required. Note: These timestamps only describe when autoscaler starts providing the scaling signal. The VMs need additional time to become serving.
     */
    schedule?: string;
    /**
     * The time zone to use when interpreting the schedule. The value of this field must be a time zone name from the tz database: http://en.wikipedia.org/wiki/Tz_database. This field is assigned a default value of “UTC” if left empty.
     */
    timeZone?: string;
}
