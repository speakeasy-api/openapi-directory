import { SpeakeasyBase } from "../../../internal/utils";
import { PreservedStatePreservedDisk } from "./preservedstatepreserveddisk";
/**
 * Preserved state for a given instance.
 */
export declare class PreservedState extends SpeakeasyBase {
    /**
     * Preserved disks defined for this instance. This map is keyed with the device names of the disks.
     */
    disks?: Record<string, PreservedStatePreservedDisk>;
    /**
     * Preserved metadata defined for this instance.
     */
    metadata?: Record<string, string>;
}
