package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RevokedCertificate
 * Describes a revoked Certificate.
**/
public class RevokedCertificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate")
    public String certificate;
    public RevokedCertificate withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hexSerialNumber")
    public String hexSerialNumber;
    public RevokedCertificate withHexSerialNumber(String hexSerialNumber) {
        this.hexSerialNumber = hexSerialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revocationReason")
    public RevokedCertificateRevocationReasonEnum revocationReason;
    public RevokedCertificate withRevocationReason(RevokedCertificateRevocationReasonEnum revocationReason) {
        this.revocationReason = revocationReason;
        return this;
    }
}