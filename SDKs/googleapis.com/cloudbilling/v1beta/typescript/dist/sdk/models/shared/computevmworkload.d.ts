import { SpeakeasyBase } from "../../../internal/utils";
import { GuestAccelerator } from "./guestaccelerator";
import { MachineType } from "./machinetype";
import { PersistentDisk } from "./persistentdisk";
import { Usage } from "./usage";
/**
 * Specificies usage of a set of identical compute VM instances.
 */
export declare class ComputeVmWorkload extends SpeakeasyBase {
    /**
     * Defines whether each instance has confidential compute enabled.
     */
    enableConfidentialCompute?: boolean;
    /**
     * Specification of a set of guest accelerators attached to a machine.
     */
    guestAccelerator?: GuestAccelerator;
    /**
     * An amount of usage over a time frame.
     */
    instancesRunning?: Usage;
    /**
     * Premium image licenses used by each instance.
     */
    licenses?: string[];
    /**
     * Specification of machine series, memory, and number of vCPUs.
     */
    machineType?: MachineType;
    /**
     * Persistent disks attached to each instance. Must include a boot disk.
     */
    persistentDisks?: PersistentDisk[];
    /**
     * Defines whether each instance is preemptible.
     */
    preemptible?: boolean;
    /**
     * The [region](https://cloud.google.com/compute/docs/regions-zones) where the VMs run. For example: "us-central1".
     */
    region?: string;
}
