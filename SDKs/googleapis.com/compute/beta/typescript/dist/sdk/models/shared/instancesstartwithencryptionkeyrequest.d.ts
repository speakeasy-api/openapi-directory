import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerEncryptionKeyProtectedDisk } from "./customerencryptionkeyprotecteddisk";
export declare class InstancesStartWithEncryptionKeyRequest extends SpeakeasyBase {
    /**
     * Array of disks associated with this instance that are protected with a customer-supplied encryption key. In order to start the instance, the disk url and its corresponding key must be provided. If the disk is not protected with a customer-supplied encryption key it should not be specified.
     */
    disks?: CustomerEncryptionKeyProtectedDisk[];
}
