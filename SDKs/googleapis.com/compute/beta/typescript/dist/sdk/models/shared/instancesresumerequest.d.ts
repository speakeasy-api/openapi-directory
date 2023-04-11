import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerEncryptionKey } from "./customerencryptionkey";
import { CustomerEncryptionKeyProtectedDisk } from "./customerencryptionkeyprotecteddisk";
export declare class InstancesResumeRequest extends SpeakeasyBase {
    /**
     * Array of disks associated with this instance that are protected with a customer-supplied encryption key. In order to resume the instance, the disk url and its corresponding key must be provided. If the disk is not protected with a customer-supplied encryption key it should not be specified.
     */
    disks?: CustomerEncryptionKeyProtectedDisk[];
    instanceEncryptionKey?: CustomerEncryptionKey;
}
