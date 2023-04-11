import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of resource for which this commitment applies. Possible values are VCPU, MEMORY, LOCAL_SSD, and ACCELERATOR.
 */
export declare enum ResourceCommitmentTypeEnum {
    Accelerator = "ACCELERATOR",
    LocalSsd = "LOCAL_SSD",
    Memory = "MEMORY",
    Unspecified = "UNSPECIFIED",
    Vcpu = "VCPU"
}
/**
 * Commitment for a particular resource (a Commitment is composed of one or more of these).
 */
export declare class ResourceCommitment extends SpeakeasyBase {
    /**
     * Name of the accelerator type resource. Applicable only when the type is ACCELERATOR.
     */
    acceleratorType?: string;
    /**
     * The amount of the resource purchased (in a type-dependent unit, such as bytes). For vCPUs, this can just be an integer. For memory, this must be provided in MB. Memory must be a multiple of 256 MB, with up to 6.5GB of memory per every vCPU.
     */
    amount?: string;
    /**
     * Type of resource for which this commitment applies. Possible values are VCPU, MEMORY, LOCAL_SSD, and ACCELERATOR.
     */
    type?: ResourceCommitmentTypeEnum;
}
