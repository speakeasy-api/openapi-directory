import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1Secret } from "./googlecloudconnectorsv1secret";
/**
 * Parameters to support Ssh public key Authentication.
 */
export declare class GoogleCloudConnectorsV1AuthConfigSshPublicKey extends SpeakeasyBase {
    /**
     * Format of SSH Client cert.
     */
    certType?: string;
    /**
     * Secret provides a reference to entries in Secret Manager.
     */
    sshClientCert?: GoogleCloudConnectorsV1Secret;
    /**
     * Secret provides a reference to entries in Secret Manager.
     */
    sshClientCertPass?: GoogleCloudConnectorsV1Secret;
    /**
     * The user account used to authenticate.
     */
    username?: string;
}
