import { SpeakeasyBase } from "../../../internal/utils";
import { DeprecationStatus } from "./deprecationstatus";
export declare class MachineTypeAccelerators extends SpeakeasyBase {
    /**
     * Number of accelerator cards exposed to the guest.
     */
    guestAcceleratorCount?: number;
    /**
     * The accelerator type resource name, not a full URL, e.g. 'nvidia-tesla-k80'.
     */
    guestAcceleratorType?: string;
}
export declare class MachineTypeScratchDisks extends SpeakeasyBase {
    /**
     * Size of the scratch disk, defined in GB.
     */
    diskGb?: number;
}
/**
 * Represents a Machine Type resource. You can use specific machine types for your VM instances based on performance and pricing requirements. For more information, read Machine Types.
 */
export declare class MachineType extends SpeakeasyBase {
    /**
     * [Output Only] A list of accelerator configurations assigned to this machine type.
     */
    accelerators?: MachineTypeAccelerators[];
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * Deprecation status for a public resource.
     */
    deprecated?: DeprecationStatus;
    /**
     * [Output Only] An optional textual description of the resource.
     */
    description?: string;
    /**
     * [Output Only] The number of virtual CPUs that are available to the instance.
     */
    guestCpus?: number;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Deprecated] This property is deprecated and will never be populated with any relevant values.
     */
    imageSpaceGb?: number;
    /**
     * [Output Only] Whether this machine type has a shared CPU. See Shared-core machine types for more information.
     */
    isSharedCpu?: boolean;
    /**
     * [Output Only] The type of the resource. Always compute#machineType for machine types.
     */
    kind?: string;
    /**
     * [Output Only] Maximum persistent disks allowed.
     */
    maximumPersistentDisks?: number;
    /**
     * [Output Only] Maximum total persistent disks size (GB) allowed.
     */
    maximumPersistentDisksSizeGb?: string;
    /**
     * [Output Only] The amount of physical memory available to the instance, defined in MB.
     */
    memoryMb?: number;
    /**
     * [Output Only] Name of the resource.
     */
    name?: string;
    /**
     * [Output Only] A list of extended scratch disks assigned to the instance.
     */
    scratchDisks?: MachineTypeScratchDisks[];
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] The name of the zone where the machine type resides, such as us-central1-a.
     */
    zone?: string;
}
