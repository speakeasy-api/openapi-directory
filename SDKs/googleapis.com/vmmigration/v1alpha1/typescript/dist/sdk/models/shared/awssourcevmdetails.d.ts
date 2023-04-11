import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The firmware type of the source VM.
 */
export declare enum AwsSourceVmDetailsFirmwareEnum {
    FirmwareUnspecified = "FIRMWARE_UNSPECIFIED",
    Efi = "EFI",
    Bios = "BIOS"
}
/**
 * Represent the source AWS VM details.
 */
export declare class AwsSourceVmDetails extends SpeakeasyBase {
    /**
     * The total size of the disks being migrated in bytes.
     */
    committedStorageBytes?: string;
    /**
     * The firmware type of the source VM.
     */
    firmware?: AwsSourceVmDetailsFirmwareEnum;
}
