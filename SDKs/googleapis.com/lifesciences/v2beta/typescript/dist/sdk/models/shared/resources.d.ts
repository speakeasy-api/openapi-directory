import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualMachine } from "./virtualmachine";
/**
 * The system resources for the pipeline run. At least one zone or region must be specified or the pipeline run will fail.
 */
export declare class Resources extends SpeakeasyBase {
    /**
     * The list of regions allowed for VM allocation. If set, the `zones` field must not be set.
     */
    regions?: string[];
    /**
     * Carries information about a Compute Engine VM resource.
     */
    virtualMachine?: VirtualMachine;
    /**
     * The list of zones allowed for VM allocation. If set, the `regions` field must not be set.
     */
    zones?: string[];
}
