package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivateCertificateAuthorityRequest
 * Request message for CertificateAuthorityService.ActivateCertificateAuthority.
**/
public class ActivateCertificateAuthorityRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pemCaCertificate")
    public String pemCaCertificate;
    public ActivateCertificateAuthorityRequest withPemCaCertificate(String pemCaCertificate) {
        this.pemCaCertificate = pemCaCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public ActivateCertificateAuthorityRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subordinateConfig")
    public SubordinateConfig subordinateConfig;
    public ActivateCertificateAuthorityRequest withSubordinateConfig(SubordinateConfig subordinateConfig) {
        this.subordinateConfig = subordinateConfig;
        return this;
    }
}