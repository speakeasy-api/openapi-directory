import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Guest OS features for boot disk.
 */
export declare class GuestOsFeature extends SpeakeasyBase {
    /**
     * The ID of a supported feature. Read Enabling guest operating system features to see a list of available options. Valid values: * `FEATURE_TYPE_UNSPECIFIED` * `MULTI_IP_SUBNET` * `SECURE_BOOT` * `UEFI_COMPATIBLE` * `VIRTIO_SCSI_MULTIQUEUE` * `WINDOWS`
     */
    type?: string;
}
