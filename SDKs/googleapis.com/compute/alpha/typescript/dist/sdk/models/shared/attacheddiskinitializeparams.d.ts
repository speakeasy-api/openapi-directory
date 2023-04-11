import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerEncryptionKey } from "./customerencryptionkey";
import { GuestOsFeature } from "./guestosfeature";
/**
 * The architecture of the attached disk. Valid values are arm64 or x86_64.
 */
export declare enum AttachedDiskInitializeParamsArchitectureEnum {
    ArchitectureUnspecified = "ARCHITECTURE_UNSPECIFIED",
    Arm64 = "ARM64",
    X8664 = "X86_64"
}
/**
 * [Deprecated] Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI.
 */
export declare enum AttachedDiskInitializeParamsInterfaceEnum {
    Nvme = "NVME",
    Scsi = "SCSI",
    Unspecified = "UNSPECIFIED"
}
/**
 * Specifies which action to take on instance update with this disk. Default is to use the existing disk.
 */
export declare enum AttachedDiskInitializeParamsOnUpdateActionEnum {
    RecreateDisk = "RECREATE_DISK",
    RecreateDiskIfSourceChanged = "RECREATE_DISK_IF_SOURCE_CHANGED",
    UseExistingDisk = "USE_EXISTING_DISK"
}
/**
 * [Input Only] Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new instance. This field is persisted and returned for instanceTemplate and not returned in the context of instance. This property is mutually exclusive with the source property; you can only define one or the other, but not both.
 */
export declare class AttachedDiskInitializeParams extends SpeakeasyBase {
    /**
     * The architecture of the attached disk. Valid values are arm64 or x86_64.
     */
    architecture?: AttachedDiskInitializeParamsArchitectureEnum;
    /**
     * An optional description. Provide this property when creating the disk.
     */
    description?: string;
    /**
     * Specifies the disk name. If not specified, the default is to use the name of the instance. If a disk with the same name already exists in the given region, the existing disk is attached to the new instance and the new disk is not created.
     */
    diskName?: string;
    /**
     * Specifies the size of the disk in base-2 GB. The size must be at least 10 GB. If you specify a sourceImage, which is required for boot disks, the default size is the size of the sourceImage. If you do not specify a sourceImage, the default disk size is 500 GB.
     */
    diskSizeGb?: string;
    /**
     * Specifies the disk type to use to create the instance. If not specified, the default is pd-standard, specified using the full URL. For example: https://www.googleapis.com/compute/v1/projects/project/zones/zone /diskTypes/pd-standard For a full list of acceptable values, see Persistent disk types. If you specify this field when creating a VM, you can provide either the full or partial URL. For example, the following values are valid: - https://www.googleapis.com/compute/v1/projects/project/zones/zone /diskTypes/diskType - projects/project/zones/zone/diskTypes/diskType - zones/zone/diskTypes/diskType If you specify this field when creating or updating an instance template or all-instances configuration, specify the type of the disk, not the URL. For example: pd-standard.
     */
    diskType?: string;
    /**
     * A list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options. Guest OS features are applied by merging initializeParams.guestOsFeatures and disks.guestOsFeatures
     */
    guestOsFeatures?: GuestOsFeature[];
    /**
     * [Deprecated] Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI.
     */
    interface?: AttachedDiskInitializeParamsInterfaceEnum;
    /**
     * Labels to apply to this disk. These can be later modified by the disks.setLabels method. This field is only applicable for persistent disks.
     */
    labels?: Record<string, string>;
    /**
     * Integer license codes indicating which licenses are attached to this disk.
     */
    licenseCodes?: string[];
    /**
     * A list of publicly visible licenses. Reserved for Google's use.
     */
    licenses?: string[];
    /**
     * Indicates whether or not the disk can be read/write attached to more than one instance.
     */
    multiWriter?: boolean;
    /**
     * Specifies which action to take on instance update with this disk. Default is to use the existing disk.
     */
    onUpdateAction?: AttachedDiskInitializeParamsOnUpdateActionEnum;
    /**
     * Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle. Values must be between 10,000 and 120,000. For more details, see the Extreme persistent disk documentation.
     */
    provisionedIops?: string;
    /**
     * Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle. Values must be between 1 and 7,124.
     */
    provisionedThroughput?: string;
    /**
     * Required for each regional disk associated with the instance. Specify the URLs of the zones where the disk should be replicated to. You must provide exactly two replica zones, and one zone must be the same as the instance zone. You can't use this option with boot disks.
     */
    replicaZones?: string[];
    /**
     * Resource manager tags to be bound to the disk. Tag keys and values have the same definition as resource manager tags. Keys must be in the format `tagKeys/{tag_key_id}`, and values are in the format `tagValues/456`. The field is ignored (both PUT & PATCH) when empty.
     */
    resourceManagerTags?: Record<string, string>;
    /**
     * Resource policies applied to this disk for automatic snapshot creations. Specified using the full or partial URL. For instance template, specify only the resource policy name.
     */
    resourcePolicies?: string[];
    /**
     * The source image to create this disk. When creating a new instance, one of initializeParams.sourceImage or initializeParams.sourceSnapshot or disks.source is required except for local SSD. To create a disk with one of the public operating system images, specify the image by its family name. For example, specify family/debian-9 to use the latest Debian 9 image: projects/debian-cloud/global/images/family/debian-9 Alternatively, use a specific version of a public operating system image: projects/debian-cloud/global/images/debian-9-stretch-vYYYYMMDD To create a disk with a custom image that you created, specify the image name in the following format: global/images/my-custom-image You can also specify a custom image by its image family, which returns the latest version of the image in that family. Replace the image name with family/family-name: global/images/family/my-image-family If the source image is deleted later, this field will not be set.
     */
    sourceImage?: string;
    sourceImageEncryptionKey?: CustomerEncryptionKey;
    /**
     * The source instant-snapshot to create this disk. When creating a new instance, one of initializeParams.sourceSnapshot or initializeParams.sourceInstantSnapshot initializeParams.sourceImage or disks.source is required except for local SSD. To create a disk with a snapshot that you created, specify the snapshot name in the following format: us-central1-a/instantSnapshots/my-backup If the source instant-snapshot is deleted later, this field will not be set.
     */
    sourceInstantSnapshot?: string;
    /**
     * The source snapshot to create this disk. When creating a new instance, one of initializeParams.sourceSnapshot or initializeParams.sourceImage or disks.source is required except for local SSD. To create a disk with a snapshot that you created, specify the snapshot name in the following format: global/snapshots/my-backup If the source snapshot is deleted later, this field will not be set.
     */
    sourceSnapshot?: string;
    sourceSnapshotEncryptionKey?: CustomerEncryptionKey;
}
