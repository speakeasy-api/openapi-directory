package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FetchCaCertsResponse
 * Response message for CertificateAuthorityService.FetchCaCerts.
**/
public class FetchCaCertsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caCerts")
    public CertChain[] caCerts;
    public FetchCaCertsResponse withCaCerts(CertChain[] caCerts) {
        this.caCerts = caCerts;
        return this;
    }
}