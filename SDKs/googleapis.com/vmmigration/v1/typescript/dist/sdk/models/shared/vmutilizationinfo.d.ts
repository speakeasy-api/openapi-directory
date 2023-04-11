import { SpeakeasyBase } from "../../../internal/utils";
import { VmUtilizationMetrics } from "./vmutilizationmetrics";
import { VmwareVmDetails, VmwareVmDetailsInput } from "./vmwarevmdetails";
/**
 * Utilization information of a single VM.
 */
export declare class VmUtilizationInfo extends SpeakeasyBase {
    /**
     * Utilization metrics values for a single VM.
     */
    utilization?: VmUtilizationMetrics;
    /**
     * The VM's ID in the source.
     */
    vmId?: string;
    /**
     * VmwareVmDetails describes a VM in vCenter.
     */
    vmwareVmDetails?: VmwareVmDetails;
}
/**
 * Utilization information of a single VM.
 */
export declare class VmUtilizationInfoInput extends SpeakeasyBase {
    /**
     * Utilization metrics values for a single VM.
     */
    utilization?: VmUtilizationMetrics;
    /**
     * The VM's ID in the source.
     */
    vmId?: string;
    /**
     * VmwareVmDetails describes a VM in vCenter.
     */
    vmwareVmDetails?: VmwareVmDetailsInput;
}
