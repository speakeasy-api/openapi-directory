import { SpeakeasyBase } from "../../../internal/utils";
/**
 * [Output Only] The current state of a scaling schedule.
 */
export declare enum ScalingScheduleStatusStateEnum {
    Active = "ACTIVE",
    Disabled = "DISABLED",
    Obsolete = "OBSOLETE",
    Ready = "READY"
}
export declare class ScalingScheduleStatus extends SpeakeasyBase {
    /**
     * [Output Only] The last time the scaling schedule became active. Note: this is a timestamp when a schedule actually became active, not when it was planned to do so. The timestamp is in RFC3339 text format.
     */
    lastStartTime?: string;
    /**
     * [Output Only] The next time the scaling schedule is to become active. Note: this is a timestamp when a schedule is planned to run, but the actual time might be slightly different. The timestamp is in RFC3339 text format.
     */
    nextStartTime?: string;
    /**
     * [Output Only] The current state of a scaling schedule.
     */
    state?: ScalingScheduleStatusStateEnum;
}
