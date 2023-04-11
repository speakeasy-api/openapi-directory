import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CloneStep holds information about the clone step progress.
 */
export declare class CloneStep extends SpeakeasyBase {
    /**
     * AdaptingOSStep contains specific step details.
     */
    adaptingOs?: Record<string, any>;
    /**
     * The time the step has ended.
     */
    endTime?: string;
    /**
     * InstantiatingMigratedVMStep contains specific step details.
     */
    instantiatingMigratedVm?: Record<string, any>;
    /**
     * PreparingVMDisksStep contains specific step details.
     */
    preparingVmDisks?: Record<string, any>;
    /**
     * The time the step has started.
     */
    startTime?: string;
}
