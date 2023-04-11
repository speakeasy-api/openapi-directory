import { SpeakeasyBase } from "../../../internal/utils";
import { SdsConfig } from "./sdsconfig";
/**
 * Defines how TLS certificates are obtained.
 */
export declare enum TlsValidationContextValidationSourceEnum {
    Invalid = "INVALID",
    UsePath = "USE_PATH",
    UseSds = "USE_SDS"
}
/**
 * [Deprecated] Defines the mechanism to obtain the Certificate Authority certificate to validate the client/server certificate. validate the client/server certificate.
 */
export declare class TlsValidationContext extends SpeakeasyBase {
    /**
     * The path to the file holding the CA certificate to validate the client or server certificate.
     */
    certificatePath?: string;
    /**
     * [Deprecated] The configuration to access the SDS server. The configuration to access the SDS server.
     */
    sdsConfig?: SdsConfig;
    /**
     * Defines how TLS certificates are obtained.
     */
    validationSource?: TlsValidationContextValidationSourceEnum;
}
