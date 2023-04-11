import { SpeakeasyBase } from "../../../internal/utils";
import { AttachedDiskInitializeParams } from "./attacheddiskinitializeparams";
import { CustomerEncryptionKey } from "./customerencryptionkey";
import { GuestOsFeature } from "./guestosfeature";
import { InitialStateConfig } from "./initialstateconfig";
/**
 * [Output Only] The architecture of the attached disk. Valid values are ARM64 or X86_64.
 */
export declare enum AttachedDiskArchitectureEnum {
    ArchitectureUnspecified = "ARCHITECTURE_UNSPECIFIED",
    Arm64 = "ARM64",
    X8664 = "X86_64"
}
/**
 * Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. For most machine types, the default is SCSI. Local SSDs can use either NVME or SCSI. In certain configurations, persistent disks can use NVMe. For more information, see About persistent disks.
 */
export declare enum AttachedDiskInterfaceEnum {
    Nvme = "NVME",
    Scsi = "SCSI"
}
/**
 * The mode in which to attach this disk, either READ_WRITE or READ_ONLY. If not specified, the default is to attach the disk in READ_WRITE mode.
 */
export declare enum AttachedDiskModeEnum {
    ReadOnly = "READ_ONLY",
    ReadWrite = "READ_WRITE"
}
/**
 * Specifies the type of the disk, either SCRATCH or PERSISTENT. If not specified, the default is PERSISTENT.
 */
export declare enum AttachedDiskTypeEnum {
    Persistent = "PERSISTENT",
    Scratch = "SCRATCH"
}
/**
 * An instance-attached disk resource.
 */
export declare class AttachedDisk extends SpeakeasyBase {
    /**
     * [Output Only] The architecture of the attached disk. Valid values are ARM64 or X86_64.
     */
    architecture?: AttachedDiskArchitectureEnum;
    /**
     * Specifies whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance).
     */
    autoDelete?: boolean;
    /**
     * Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem.
     */
    boot?: boolean;
    /**
     * Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine. This field is only applicable for persistent disks.
     */
    deviceName?: string;
    diskEncryptionKey?: CustomerEncryptionKey;
    /**
     * The size of the disk in GB.
     */
    diskSizeGb?: string;
    /**
     * [Input Only] Whether to force attach the regional disk even if it's currently attached to another instance. If you try to force attach a zonal disk to an instance, you will receive an error.
     */
    forceAttach?: boolean;
    /**
     * A list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options.
     */
    guestOsFeatures?: GuestOsFeature[];
    /**
     * [Output Only] A zero-based index to this disk, where 0 is reserved for the boot disk. If you have many disks attached to an instance, each disk would have a unique index number.
     */
    index?: number;
    /**
     * [Input Only] Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new instance. This field is persisted and returned for instanceTemplate and not returned in the context of instance. This property is mutually exclusive with the source property; you can only define one or the other, but not both.
     */
    initializeParams?: AttachedDiskInitializeParams;
    /**
     * Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. For most machine types, the default is SCSI. Local SSDs can use either NVME or SCSI. In certain configurations, persistent disks can use NVMe. For more information, see About persistent disks.
     */
    interface?: AttachedDiskInterfaceEnum;
    /**
     * [Output Only] Type of the resource. Always compute#attachedDisk for attached disks.
     */
    kind?: string;
    /**
     * [Output Only] Any valid publicly visible licenses.
     */
    licenses?: string[];
    /**
     * [Output Only] Whether to indicate the attached disk is locked. The locked disk is not allowed to be detached from the instance, or to be used as the source of the snapshot creation, and the image creation. The instance with at least one locked attached disk is not allow to be used as source of machine image creation, instant snapshot creation, and not allowed to be deleted with --keep-disk parameter set to true for locked disks.
     */
    locked?: boolean;
    /**
     * The mode in which to attach this disk, either READ_WRITE or READ_ONLY. If not specified, the default is to attach the disk in READ_WRITE mode.
     */
    mode?: AttachedDiskModeEnum;
    /**
     * Initial State for shielded instance, these are public keys which are safe to store in public
     */
    shieldedInstanceInitialState?: InitialStateConfig;
    /**
     * Specifies a valid partial or full URL to an existing Persistent Disk resource. When creating a new instance, one of initializeParams.sourceImage or initializeParams.sourceSnapshot or disks.source is required except for local SSD. If desired, you can also attach existing non-root persistent disks using this property. This field is only applicable for persistent disks. Note that for InstanceTemplate, specify the disk name for zonal disk, and the URL for regional disk.
     */
    source?: string;
    /**
     * Specifies the type of the disk, either SCRATCH or PERSISTENT. If not specified, the default is PERSISTENT.
     */
    type?: AttachedDiskTypeEnum;
    /**
     * [Output Only] A list of user provided licenses. It represents a list of URLs to the license resource. Unlike regular licenses, user provided licenses can be modified after the disk is created.
     */
    userLicenses?: string[];
}
