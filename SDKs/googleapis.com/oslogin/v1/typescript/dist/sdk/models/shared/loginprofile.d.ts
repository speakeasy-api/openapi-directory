import { SpeakeasyBase } from "../../../internal/utils";
import { PosixAccount } from "./posixaccount";
import { SshPublicKey } from "./sshpublickey";
/**
 * The user profile information used for logging in to a virtual machine on Google Compute Engine.
 */
export declare class LoginProfile extends SpeakeasyBase {
    /**
     * Required. A unique user ID.
     */
    name?: string;
    /**
     * The list of POSIX accounts associated with the user.
     */
    posixAccounts?: PosixAccount[];
    /**
     * A map from SSH public key fingerprint to the associated key object.
     */
    sshPublicKeys?: Record<string, SshPublicKey>;
}
