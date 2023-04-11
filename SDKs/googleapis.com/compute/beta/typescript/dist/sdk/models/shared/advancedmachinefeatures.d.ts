import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies options for controlling advanced machine features. Options that would traditionally be configured in a BIOS belong here. Features that require operating system support may have corresponding entries in the GuestOsFeatures of an Image (e.g., whether or not the OS in the Image supports nested virtualization being enabled or disabled).
 */
export declare class AdvancedMachineFeatures extends SpeakeasyBase {
    /**
     * Whether to enable nested virtualization or not (default is false).
     */
    enableNestedVirtualization?: boolean;
    /**
     * Whether to enable UEFI networking for instance creation.
     */
    enableUefiNetworking?: boolean;
    /**
     * The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
     */
    threadsPerCore?: number;
    /**
     * The number of physical cores to expose to an instance. Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance's nominal CPU count and the underlying platform's SMT width.
     */
    visibleCoreCount?: number;
}
