import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for CertificateAuthorityService.FetchCertificateAuthorityCsr.
 */
export declare class FetchCertificateAuthorityCsrResponse extends SpeakeasyBase {
    /**
     * Output only. The PEM-encoded signed certificate signing request (CSR).
     */
    pemCsr?: string;
}
