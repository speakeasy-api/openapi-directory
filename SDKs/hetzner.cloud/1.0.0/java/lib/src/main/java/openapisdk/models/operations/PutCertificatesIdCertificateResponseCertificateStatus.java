package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutCertificatesIdCertificateResponseCertificateStatus
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
**/
public class PutCertificatesIdCertificateResponseCertificateStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public PutCertificatesIdCertificateResponseCertificateStatusError error;
    public PutCertificatesIdCertificateResponseCertificateStatus withError(PutCertificatesIdCertificateResponseCertificateStatusError error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuance")
    public PutCertificatesIdCertificateResponseCertificateStatusIssuanceEnum issuance;
    public PutCertificatesIdCertificateResponseCertificateStatus withIssuance(PutCertificatesIdCertificateResponseCertificateStatusIssuanceEnum issuance) {
        this.issuance = issuance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewal")
    public PutCertificatesIdCertificateResponseCertificateStatusRenewalEnum renewal;
    public PutCertificatesIdCertificateResponseCertificateStatus withRenewal(PutCertificatesIdCertificateResponseCertificateStatusRenewalEnum renewal) {
        this.renewal = renewal;
        return this;
    }
}