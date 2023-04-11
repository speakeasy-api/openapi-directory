import { SpeakeasyBase } from "../../../internal/utils";
import { Secret } from "./secret";
/**
 * Parameters to support Ssh public key Authentication.
 */
export declare class SshPublicKey extends SpeakeasyBase {
    /**
     * Format of SSH Client cert.
     */
    certType?: string;
    /**
     * Secret provides a reference to entries in Secret Manager.
     */
    sshClientCert?: Secret;
    /**
     * Secret provides a reference to entries in Secret Manager.
     */
    sshClientCertPass?: Secret;
    /**
     * The user account used to authenticate.
     */
    username?: string;
}
