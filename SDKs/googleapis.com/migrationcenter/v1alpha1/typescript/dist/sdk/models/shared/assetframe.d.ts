import { SpeakeasyBase } from "../../../internal/utils";
import { PerformanceSample } from "./performancesample";
import { VirtualMachineDetails } from "./virtualmachinedetails";
/**
 * Contains data reported from an inventory source on an asset.
 */
export declare class AssetFrame extends SpeakeasyBase {
    /**
     * Generic asset attributes.
     */
    attributes?: Record<string, string>;
    /**
     * Labels as key value pairs.
     */
    labels?: Record<string, string>;
    /**
     * Asset performance data samples.
     */
    performanceSamples?: PerformanceSample[];
    /**
     * The time the data was reported.
     */
    reportTime?: string;
    /**
     * Optional. Trace token is optionally provided to assist with debugging and traceability.
     */
    traceToken?: string;
    /**
     * Details of a VirtualMachine.
     */
    virtualMachineDetails?: VirtualMachineDetails;
}
