package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCertificatesIdCertificateResponseCertificateStatus
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
**/
public class GetCertificatesIdCertificateResponseCertificateStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public GetCertificatesIdCertificateResponseCertificateStatusError error;
    public GetCertificatesIdCertificateResponseCertificateStatus withError(GetCertificatesIdCertificateResponseCertificateStatusError error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuance")
    public GetCertificatesIdCertificateResponseCertificateStatusIssuanceEnum issuance;
    public GetCertificatesIdCertificateResponseCertificateStatus withIssuance(GetCertificatesIdCertificateResponseCertificateStatusIssuanceEnum issuance) {
        this.issuance = issuance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewal")
    public GetCertificatesIdCertificateResponseCertificateStatusRenewalEnum renewal;
    public GetCertificatesIdCertificateResponseCertificateStatus withRenewal(GetCertificatesIdCertificateResponseCertificateStatusRenewalEnum renewal) {
        this.renewal = renewal;
        return this;
    }
}