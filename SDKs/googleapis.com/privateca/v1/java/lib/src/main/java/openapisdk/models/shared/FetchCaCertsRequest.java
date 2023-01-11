package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FetchCaCertsRequest
 * Request message for CertificateAuthorityService.FetchCaCerts.
**/
public class FetchCaCertsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public FetchCaCertsRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}