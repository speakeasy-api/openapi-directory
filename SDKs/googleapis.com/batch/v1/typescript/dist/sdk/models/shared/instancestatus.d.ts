import { SpeakeasyBase } from "../../../internal/utils";
import { Disk } from "./disk";
/**
 * The VM instance provisioning model.
 */
export declare enum InstanceStatusProvisioningModelEnum {
    ProvisioningModelUnspecified = "PROVISIONING_MODEL_UNSPECIFIED",
    Standard = "STANDARD",
    Spot = "SPOT",
    Preemptible = "PREEMPTIBLE"
}
/**
 * VM instance status.
 */
export declare class InstanceStatus extends SpeakeasyBase {
    /**
     * A new persistent disk or a local ssd. A VM can only have one local SSD setting but multiple local SSD partitions. See https://cloud.google.com/compute/docs/disks#pdspecs and https://cloud.google.com/compute/docs/disks#localssds.
     */
    bootDisk?: Disk;
    /**
     * The Compute Engine machine type.
     */
    machineType?: string;
    /**
     * The VM instance provisioning model.
     */
    provisioningModel?: InstanceStatusProvisioningModelEnum;
    /**
     * The max number of tasks can be assigned to this instance type.
     */
    taskPack?: string;
}
