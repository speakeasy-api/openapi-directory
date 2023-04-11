import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * Backfill job state.
 */
export declare enum BackfillJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    NotStarted = "NOT_STARTED",
    Pending = "PENDING",
    Active = "ACTIVE",
    Stopped = "STOPPED",
    Failed = "FAILED",
    Completed = "COMPLETED",
    Unsupported = "UNSUPPORTED"
}
/**
 * Backfill job's triggering reason.
 */
export declare enum BackfillJobTriggerEnum {
    TriggerUnspecified = "TRIGGER_UNSPECIFIED",
    Automatic = "AUTOMATIC",
    Manual = "MANUAL"
}
/**
 * Represents a backfill job on a specific stream object.
 */
export declare class BackfillJob extends SpeakeasyBase {
    /**
     * Output only. Errors which caused the backfill job to fail.
     */
    errors?: ErrorT[];
    /**
     * Output only. Backfill job's end time.
     */
    lastEndTime?: string;
    /**
     * Output only. Backfill job's start time.
     */
    lastStartTime?: string;
    /**
     * Backfill job state.
     */
    state?: BackfillJobStateEnum;
    /**
     * Backfill job's triggering reason.
     */
    trigger?: BackfillJobTriggerEnum;
}
