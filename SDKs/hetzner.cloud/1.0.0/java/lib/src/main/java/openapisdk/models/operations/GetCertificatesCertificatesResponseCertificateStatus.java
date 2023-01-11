package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCertificatesCertificatesResponseCertificateStatus
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
**/
public class GetCertificatesCertificatesResponseCertificateStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public GetCertificatesCertificatesResponseCertificateStatusError error;
    public GetCertificatesCertificatesResponseCertificateStatus withError(GetCertificatesCertificatesResponseCertificateStatusError error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuance")
    public GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum issuance;
    public GetCertificatesCertificatesResponseCertificateStatus withIssuance(GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum issuance) {
        this.issuance = issuance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewal")
    public GetCertificatesCertificatesResponseCertificateStatusRenewalEnum renewal;
    public GetCertificatesCertificatesResponseCertificateStatus withRenewal(GetCertificatesCertificatesResponseCertificateStatusRenewalEnum renewal) {
        this.renewal = renewal;
        return this;
    }
}