import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The ID of a supported feature. To add multiple values, use commas to separate values. Set to one or more of the following values: - VIRTIO_SCSI_MULTIQUEUE - WINDOWS - MULTI_IP_SUBNET - UEFI_COMPATIBLE - GVNIC - SEV_CAPABLE - SUSPEND_RESUME_COMPATIBLE - SEV_SNP_CAPABLE - TDX_CAPABLE For more information, see Enabling guest operating system features.
 */
export declare enum GuestOsFeatureTypeEnum {
    BareMetalLinuxCompatible = "BARE_METAL_LINUX_COMPATIBLE",
    FeatureTypeUnspecified = "FEATURE_TYPE_UNSPECIFIED",
    Gvnic = "GVNIC",
    MultiIpSubnet = "MULTI_IP_SUBNET",
    SecureBoot = "SECURE_BOOT",
    SevCapable = "SEV_CAPABLE",
    SevLiveMigratable = "SEV_LIVE_MIGRATABLE",
    SevSnpCapable = "SEV_SNP_CAPABLE",
    UefiCompatible = "UEFI_COMPATIBLE",
    VirtioScsiMultiqueue = "VIRTIO_SCSI_MULTIQUEUE",
    Windows = "WINDOWS"
}
/**
 * Guest OS features.
 */
export declare class GuestOsFeature extends SpeakeasyBase {
    /**
     * The ID of a supported feature. To add multiple values, use commas to separate values. Set to one or more of the following values: - VIRTIO_SCSI_MULTIQUEUE - WINDOWS - MULTI_IP_SUBNET - UEFI_COMPATIBLE - GVNIC - SEV_CAPABLE - SUSPEND_RESUME_COMPATIBLE - SEV_SNP_CAPABLE - TDX_CAPABLE For more information, see Enabling guest operating system features.
     */
    type?: GuestOsFeatureTypeEnum;
}
