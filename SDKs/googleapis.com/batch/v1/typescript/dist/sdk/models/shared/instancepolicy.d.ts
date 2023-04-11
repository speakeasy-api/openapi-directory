import { SpeakeasyBase } from "../../../internal/utils";
import { Accelerator } from "./accelerator";
import { AttachedDisk } from "./attacheddisk";
import { Disk } from "./disk";
/**
 * The provisioning model.
 */
export declare enum InstancePolicyProvisioningModelEnum {
    ProvisioningModelUnspecified = "PROVISIONING_MODEL_UNSPECIFIED",
    Standard = "STANDARD",
    Spot = "SPOT",
    Preemptible = "PREEMPTIBLE"
}
/**
 * InstancePolicy describes an instance type and resources attached to each VM created by this InstancePolicy.
 */
export declare class InstancePolicy extends SpeakeasyBase {
    /**
     * The accelerators attached to each VM instance.
     */
    accelerators?: Accelerator[];
    /**
     * A new persistent disk or a local ssd. A VM can only have one local SSD setting but multiple local SSD partitions. See https://cloud.google.com/compute/docs/disks#pdspecs and https://cloud.google.com/compute/docs/disks#localssds.
     */
    bootDisk?: Disk;
    /**
     * Non-boot disks to be attached for each VM created by this InstancePolicy. New disks will be deleted when the VM is deleted.
     */
    disks?: AttachedDisk[];
    /**
     * The Compute Engine machine type.
     */
    machineType?: string;
    /**
     * The minimum CPU platform. See https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform. Not yet implemented.
     */
    minCpuPlatform?: string;
    /**
     * The provisioning model.
     */
    provisioningModel?: InstancePolicyProvisioningModelEnum;
}
