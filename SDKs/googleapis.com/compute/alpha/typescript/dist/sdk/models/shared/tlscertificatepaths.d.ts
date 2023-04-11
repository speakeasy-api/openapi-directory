import { SpeakeasyBase } from "../../../internal/utils";
/**
 * [Deprecated] The paths to the mounted TLS Certificates and private key. The paths to the mounted TLS Certificates and private key.
 */
export declare class TlsCertificatePaths extends SpeakeasyBase {
    /**
     * The path to the file holding the client or server TLS certificate to use.
     */
    certificatePath?: string;
    /**
     * The path to the file holding the client or server private key.
     */
    privateKeyPath?: string;
}
