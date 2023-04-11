import { SpeakeasyBase } from "../../../internal/utils";
import { LocalDiskInitializeParams } from "./localdiskinitializeparams";
import { RuntimeGuestOsFeature } from "./runtimeguestosfeature";
/**
 * A Local attached disk resource.
 */
export declare class LocalDiskInput extends SpeakeasyBase {
    /**
     * Input only. Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new runtime. This property is mutually exclusive with the source property; you can only define one or the other, but not both.
     */
    initializeParams?: LocalDiskInitializeParams;
    /**
     * Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI and the request will fail if you attempt to attach a persistent disk in any other format than SCSI. Local SSDs can use either NVME or SCSI. For performance characteristics of SCSI over NVMe, see Local SSD performance. Valid values: * `NVME` * `SCSI`
     */
    interface?: string;
    /**
     * The mode in which to attach this disk, either `READ_WRITE` or `READ_ONLY`. If not specified, the default is to attach the disk in `READ_WRITE` mode. Valid values: * `READ_ONLY` * `READ_WRITE`
     */
    mode?: string;
    /**
     * Specifies a valid partial or full URL to an existing Persistent Disk resource.
     */
    source?: string;
    /**
     * Specifies the type of the disk, either `SCRATCH` or `PERSISTENT`. If not specified, the default is `PERSISTENT`. Valid values: * `PERSISTENT` * `SCRATCH`
     */
    type?: string;
}
/**
 * A Local attached disk resource.
 */
export declare class LocalDisk extends SpeakeasyBase {
    /**
     * Optional. Output only. Specifies whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance).
     */
    autoDelete?: boolean;
    /**
     * Optional. Output only. Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem.
     */
    boot?: boolean;
    /**
     * Optional. Output only. Specifies a unique device name of your choice that is reflected into the `/dev/disk/by-id/google-*` tree of a Linux operating system running within the instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine. This field is only applicable for persistent disks.
     */
    deviceName?: string;
    /**
     * Output only. Indicates a list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options.
     */
    guestOsFeatures?: RuntimeGuestOsFeature[];
    /**
     * Output only. A zero-based index to this disk, where 0 is reserved for the boot disk. If you have many disks attached to an instance, each disk would have a unique index number.
     */
    index?: number;
    /**
     * Input only. Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new runtime. This property is mutually exclusive with the source property; you can only define one or the other, but not both.
     */
    initializeParams?: LocalDiskInitializeParams;
    /**
     * Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI and the request will fail if you attempt to attach a persistent disk in any other format than SCSI. Local SSDs can use either NVME or SCSI. For performance characteristics of SCSI over NVMe, see Local SSD performance. Valid values: * `NVME` * `SCSI`
     */
    interface?: string;
    /**
     * Output only. Type of the resource. Always compute#attachedDisk for attached disks.
     */
    kind?: string;
    /**
     * Output only. Any valid publicly visible licenses.
     */
    licenses?: string[];
    /**
     * The mode in which to attach this disk, either `READ_WRITE` or `READ_ONLY`. If not specified, the default is to attach the disk in `READ_WRITE` mode. Valid values: * `READ_ONLY` * `READ_WRITE`
     */
    mode?: string;
    /**
     * Specifies a valid partial or full URL to an existing Persistent Disk resource.
     */
    source?: string;
    /**
     * Specifies the type of the disk, either `SCRATCH` or `PERSISTENT`. If not specified, the default is `PERSISTENT`. Valid values: * `PERSISTENT` * `SCRATCH`
     */
    type?: string;
}
