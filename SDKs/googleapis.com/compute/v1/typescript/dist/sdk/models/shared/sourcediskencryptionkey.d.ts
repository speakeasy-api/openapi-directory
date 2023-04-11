import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerEncryptionKey } from "./customerencryptionkey";
export declare class SourceDiskEncryptionKey extends SpeakeasyBase {
    diskEncryptionKey?: CustomerEncryptionKey;
    /**
     * URL of the disk attached to the source instance. This can be a full or valid partial URL. For example, the following are valid values: - https://www.googleapis.com/compute/v1/projects/project/zones/zone /disks/disk - projects/project/zones/zone/disks/disk - zones/zone/disks/disk
     */
    sourceDisk?: string;
}
