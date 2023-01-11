package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostCertificatesCreateCertificateResponseCertificateStatus
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
**/
public class PostCertificatesCreateCertificateResponseCertificateStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public PostCertificatesCreateCertificateResponseCertificateStatusError error;
    public PostCertificatesCreateCertificateResponseCertificateStatus withError(PostCertificatesCreateCertificateResponseCertificateStatusError error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuance")
    public PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum issuance;
    public PostCertificatesCreateCertificateResponseCertificateStatus withIssuance(PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum issuance) {
        this.issuance = issuance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewal")
    public PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum renewal;
    public PostCertificatesCreateCertificateResponseCertificateStatus withRenewal(PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum renewal) {
        this.renewal = renewal;
        return this;
    }
}