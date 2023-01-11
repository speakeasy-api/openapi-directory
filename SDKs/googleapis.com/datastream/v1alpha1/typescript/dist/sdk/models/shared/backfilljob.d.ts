import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
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
export declare enum BackfillJobTriggerEnum {
    TriggerUnspecified = "TRIGGER_UNSPECIFIED",
    Automatic = "AUTOMATIC",
    Manual = "MANUAL"
}
/**
 * Represents a backfill job on a specific stream object.
**/
export declare class BackfillJob extends SpeakeasyBase {
    errors?: ErrorT[];
    lastEndTime?: string;
    lastStartTime?: string;
    state?: BackfillJobStateEnum;
    trigger?: BackfillJobTriggerEnum;
}
