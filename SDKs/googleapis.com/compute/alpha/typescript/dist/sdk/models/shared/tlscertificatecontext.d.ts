import { SpeakeasyBase } from "../../../internal/utils";
import { SdsConfig } from "./sdsconfig";
import { TlsCertificatePaths } from "./tlscertificatepaths";
/**
 * Defines how TLS certificates are obtained.
 */
export declare enum TlsCertificateContextCertificateSourceEnum {
    Invalid = "INVALID",
    UsePath = "USE_PATH",
    UseSds = "USE_SDS"
}
/**
 * [Deprecated] Defines the mechanism to obtain the client or server certificate. Defines the mechanism to obtain the client or server certificate.
 */
export declare class TlsCertificateContext extends SpeakeasyBase {
    /**
     * [Deprecated] The paths to the mounted TLS Certificates and private key. The paths to the mounted TLS Certificates and private key.
     */
    certificatePaths?: TlsCertificatePaths;
    /**
     * Defines how TLS certificates are obtained.
     */
    certificateSource?: TlsCertificateContextCertificateSourceEnum;
    /**
     * [Deprecated] The configuration to access the SDS server. The configuration to access the SDS server.
     */
    sdsConfig?: SdsConfig;
}
