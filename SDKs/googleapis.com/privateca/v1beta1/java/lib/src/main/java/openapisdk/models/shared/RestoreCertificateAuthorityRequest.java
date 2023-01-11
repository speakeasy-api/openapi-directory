package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RestoreCertificateAuthorityRequest
 * Request message for CertificateAuthorityService.RestoreCertificateAuthority.
**/
public class RestoreCertificateAuthorityRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public RestoreCertificateAuthorityRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}