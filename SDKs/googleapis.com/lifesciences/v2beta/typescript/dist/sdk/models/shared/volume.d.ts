import { SpeakeasyBase } from "../../../internal/utils";
import { ExistingDisk } from "./existingdisk";
import { NFSMount } from "./nfsmount";
import { PersistentDisk } from "./persistentdisk";
/**
 * Carries information about storage that can be attached to a VM. Specify either `Volume` or `Disk`, but not both.
 */
export declare class Volume extends SpeakeasyBase {
    /**
     * Configuration for an existing disk to be attached to the VM.
     */
    existingDisk?: ExistingDisk;
    /**
     * Configuration for an `NFSMount` to be attached to the VM.
     */
    nfsMount?: NFSMount;
    /**
     * Configuration for a persistent disk to be attached to the VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations.
     */
    persistentDisk?: PersistentDisk;
    /**
     * A user-supplied name for the volume. Used when mounting the volume into `Actions`. The name must contain only upper and lowercase alphanumeric characters and hyphens and cannot start with a hyphen.
     */
    volume?: string;
}
