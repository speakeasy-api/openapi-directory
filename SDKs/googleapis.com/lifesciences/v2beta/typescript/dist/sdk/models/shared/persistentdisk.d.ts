import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for a persistent disk to be attached to the VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations.
 */
export declare class PersistentDisk extends SpeakeasyBase {
    /**
     * The size, in GB, of the disk to attach. If the size is not specified, a default is chosen to ensure reasonable I/O performance. If the disk type is specified as `local-ssd`, multiple local drives are automatically combined to provide the requested size. Note, however, that each physical SSD is 375GB in size, and no more than 8 drives can be attached to a single instance.
     */
    sizeGb?: number;
    /**
     * An image to put on the disk before attaching it to the VM.
     */
    sourceImage?: string;
    /**
     * The Compute Engine disk type. If unspecified, `pd-standard` is used.
     */
    type?: string;
}
