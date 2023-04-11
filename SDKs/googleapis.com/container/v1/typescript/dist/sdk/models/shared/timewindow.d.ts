import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceExclusionOptions } from "./maintenanceexclusionoptions";
/**
 * Represents an arbitrary window of time.
 */
export declare class TimeWindow extends SpeakeasyBase {
    /**
     * The time that the window ends. The end time should take place after the start time.
     */
    endTime?: string;
    /**
     * Represents the Maintenance exclusion option.
     */
    maintenanceExclusionOptions?: MaintenanceExclusionOptions;
    /**
     * The time that the window first starts.
     */
    startTime?: string;
}
