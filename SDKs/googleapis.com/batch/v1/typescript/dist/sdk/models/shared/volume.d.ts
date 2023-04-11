import { SpeakeasyBase } from "../../../internal/utils";
import { Gcs } from "./gcs";
import { Nfs } from "./nfs";
/**
 * Volume describes a volume and parameters for it to be mounted to a VM.
 */
export declare class Volume extends SpeakeasyBase {
    /**
     * Device name of an attached disk volume, which should align with a device_name specified by job.allocation_policy.instances[0].policy.disks[i].device_name or defined by the given instance template in job.allocation_policy.instances[0].instance_template.
     */
    deviceName?: string;
    /**
     * Represents a Google Cloud Storage volume.
     */
    gcs?: Gcs;
    /**
     * For Google Cloud Storage (GCS), mount options are the options supported by the gcsfuse tool (https://github.com/GoogleCloudPlatform/gcsfuse). For existing persistent disks, mount options provided by the mount command (https://man7.org/linux/man-pages/man8/mount.8.html) except writing are supported. This is due to restrictions of multi-writer mode (https://cloud.google.com/compute/docs/disks/sharing-disks-between-vms). For other attached disks and Network File System (NFS), mount options are these supported by the mount command (https://man7.org/linux/man-pages/man8/mount.8.html).
     */
    mountOptions?: string[];
    /**
     * The mount path for the volume, e.g. /mnt/disks/share.
     */
    mountPath?: string;
    /**
     * Represents an NFS volume.
     */
    nfs?: Nfs;
}
