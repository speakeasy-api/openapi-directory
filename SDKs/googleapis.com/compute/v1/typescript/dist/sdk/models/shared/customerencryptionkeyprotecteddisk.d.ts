import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerEncryptionKey } from "./customerencryptionkey";
export declare class CustomerEncryptionKeyProtectedDisk extends SpeakeasyBase {
    diskEncryptionKey?: CustomerEncryptionKey;
    /**
     * Specifies a valid partial or full URL to an existing Persistent Disk resource. This field is only applicable for persistent disks. For example: "source": "/compute/v1/projects/project_id/zones/zone/disks/ disk_name
     */
    source?: string;
}
