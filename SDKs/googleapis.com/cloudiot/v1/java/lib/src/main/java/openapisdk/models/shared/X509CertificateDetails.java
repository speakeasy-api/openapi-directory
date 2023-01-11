package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * X509CertificateDetails
 * Details of an X.509 certificate. For informational purposes only.
**/
public class X509CertificateDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiryTime")
    public String expiryTime;
    public X509CertificateDetails withExpiryTime(String expiryTime) {
        this.expiryTime = expiryTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuer")
    public String issuer;
    public X509CertificateDetails withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKeyType")
    public String publicKeyType;
    public X509CertificateDetails withPublicKeyType(String publicKeyType) {
        this.publicKeyType = publicKeyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signatureAlgorithm")
    public String signatureAlgorithm;
    public X509CertificateDetails withSignatureAlgorithm(String signatureAlgorithm) {
        this.signatureAlgorithm = signatureAlgorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public X509CertificateDetails withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public String subject;
    public X509CertificateDetails withSubject(String subject) {
        this.subject = subject;
        return this;
    }
}