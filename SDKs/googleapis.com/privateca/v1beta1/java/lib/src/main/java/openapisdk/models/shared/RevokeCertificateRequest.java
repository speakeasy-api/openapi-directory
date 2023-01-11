package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RevokeCertificateRequest
 * Request message for CertificateAuthorityService.RevokeCertificate.
**/
public class RevokeCertificateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public RevokeCertificateRequestReasonEnum reason;
    public RevokeCertificateRequest withReason(RevokeCertificateRequestReasonEnum reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public RevokeCertificateRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}