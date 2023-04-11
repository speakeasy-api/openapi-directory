import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for Instances.DebugInstance.
 */
export declare class DebugInstanceRequest extends SpeakeasyBase {
    /**
     * Public SSH key to add to the instance. Examples: [USERNAME]:ssh-rsa [KEY_VALUE] [USERNAME] [USERNAME]:ssh-rsa [KEY_VALUE] google-ssh {"userName":"[USERNAME]","expireOn":"[EXPIRE_TIME]"}For more information, see Adding and Removing SSH Keys (https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys).
     */
    sshKey?: string;
}
