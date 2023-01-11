package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublicKeyCertificate
 * A public key certificate format and data.
**/
public class PublicKeyCertificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate")
    public String certificate;
    public PublicKeyCertificate withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public PublicKeyCertificateFormatEnum format;
    public PublicKeyCertificate withFormat(PublicKeyCertificateFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("x509Details")
    public X509CertificateDetails x509Details;
    public PublicKeyCertificate withX509Details(X509CertificateDetails x509Details) {
        this.x509Details = x509Details;
        return this;
    }
}