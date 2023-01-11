package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnableCertificateAuthorityRequest
 * Request message for CertificateAuthorityService.EnableCertificateAuthority.
**/
public class EnableCertificateAuthorityRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public EnableCertificateAuthorityRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}