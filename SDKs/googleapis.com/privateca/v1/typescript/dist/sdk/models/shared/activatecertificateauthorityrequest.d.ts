import { SpeakeasyBase } from "../../../internal/utils";
import { SubordinateConfig } from "./subordinateconfig";
/**
 * Request message for CertificateAuthorityService.ActivateCertificateAuthority.
 */
export declare class ActivateCertificateAuthorityRequest extends SpeakeasyBase {
    /**
     * Required. The signed CA certificate issued from FetchCertificateAuthorityCsrResponse.pem_csr.
     */
    pemCaCertificate?: string;
    /**
     * Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Describes a subordinate CA's issuers. This is either a resource name to a known issuing CertificateAuthority, or a PEM issuer certificate chain.
     */
    subordinateConfig?: SubordinateConfig;
}
