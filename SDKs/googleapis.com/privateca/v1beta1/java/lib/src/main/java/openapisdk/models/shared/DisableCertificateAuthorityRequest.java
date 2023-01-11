package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DisableCertificateAuthorityRequest
 * Request message for CertificateAuthorityService.DisableCertificateAuthority.
**/
public class DisableCertificateAuthorityRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public DisableCertificateAuthorityRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}