package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FetchCertificateAuthorityCsrResponse
 * Response message for CertificateAuthorityService.FetchCertificateAuthorityCsr.
**/
public class FetchCertificateAuthorityCsrResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pemCsr")
    public String pemCsr;
    public FetchCertificateAuthorityCsrResponse withPemCsr(String pemCsr) {
        this.pemCsr = pemCsr;
        return this;
    }
}