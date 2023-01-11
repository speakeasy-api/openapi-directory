package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScheduleDeleteCertificateAuthorityRequest
 * Request message for CertificateAuthorityService.ScheduleDeleteCertificateAuthority.
**/
public class ScheduleDeleteCertificateAuthorityRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreActiveCertificates")
    public Boolean ignoreActiveCertificates;
    public ScheduleDeleteCertificateAuthorityRequest withIgnoreActiveCertificates(Boolean ignoreActiveCertificates) {
        this.ignoreActiveCertificates = ignoreActiveCertificates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public ScheduleDeleteCertificateAuthorityRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}