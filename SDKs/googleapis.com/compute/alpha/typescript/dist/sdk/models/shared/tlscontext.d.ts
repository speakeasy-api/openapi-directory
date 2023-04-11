import { SpeakeasyBase } from "../../../internal/utils";
import { TlsCertificateContext } from "./tlscertificatecontext";
import { TlsValidationContext } from "./tlsvalidationcontext";
/**
 * [Deprecated] The TLS settings for the client or server. The TLS settings for the client or server.
 */
export declare class TlsContext extends SpeakeasyBase {
    /**
     * [Deprecated] Defines the mechanism to obtain the client or server certificate. Defines the mechanism to obtain the client or server certificate.
     */
    certificateContext?: TlsCertificateContext;
    /**
     * [Deprecated] Defines the mechanism to obtain the Certificate Authority certificate to validate the client/server certificate. validate the client/server certificate.
     */
    validationContext?: TlsValidationContext;
}
