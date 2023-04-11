import { SpeakeasyBase } from "../../../internal/utils";
import { LoginProfile } from "./loginprofile";
/**
 * A response message for importing an SSH public key.
 */
export declare class ImportSshPublicKeyResponse extends SpeakeasyBase {
    /**
     * Detailed information about import results.
     */
    details?: string;
    /**
     * The user profile information used for logging in to a virtual machine on Google Compute Engine.
     */
    loginProfile?: LoginProfile;
}
