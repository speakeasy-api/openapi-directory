import { SpeakeasyBase } from "../../../internal/utils";
import { KeyRangeLocation } from "./keyrangelocation";
import { StateFamilyConfig } from "./statefamilyconfig";
import { StreamLocation } from "./streamlocation";
/**
 * All configuration data for a particular Computation.
 */
export declare class ComputationTopology extends SpeakeasyBase {
    /**
     * The ID of the computation.
     */
    computationId?: string;
    /**
     * The inputs to the computation.
     */
    inputs?: StreamLocation[];
    /**
     * The key ranges processed by the computation.
     */
    keyRanges?: KeyRangeLocation[];
    /**
     * The outputs from the computation.
     */
    outputs?: StreamLocation[];
    /**
     * The state family values.
     */
    stateFamilies?: StateFamilyConfig[];
    /**
     * The system stage name.
     */
    systemStageName?: string;
}
