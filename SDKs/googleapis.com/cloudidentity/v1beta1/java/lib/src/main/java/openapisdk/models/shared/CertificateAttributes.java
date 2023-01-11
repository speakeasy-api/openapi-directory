package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateAttributes
 * Stores information about a certificate.
**/
public class CertificateAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateTemplate")
    public CertificateTemplate certificateTemplate;
    public CertificateAttributes withCertificateTemplate(CertificateTemplate certificateTemplate) {
        this.certificateTemplate = certificateTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerprint")
    public String fingerprint;
    public CertificateAttributes withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuer")
    public String issuer;
    public CertificateAttributes withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serialNumber")
    public String serialNumber;
    public CertificateAttributes withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public String subject;
    public CertificateAttributes withSubject(String subject) {
        this.subject = subject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbprint")
    public String thumbprint;
    public CertificateAttributes withThumbprint(String thumbprint) {
        this.thumbprint = thumbprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validationState")
    public CertificateAttributesValidationStateEnum validationState;
    public CertificateAttributes withValidationState(CertificateAttributesValidationStateEnum validationState) {
        this.validationState = validationState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validityExpirationTime")
    public String validityExpirationTime;
    public CertificateAttributes withValidityExpirationTime(String validityExpirationTime) {
        this.validityExpirationTime = validityExpirationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validityStartTime")
    public String validityStartTime;
    public CertificateAttributes withValidityStartTime(String validityStartTime) {
        this.validityStartTime = validityStartTime;
        return this;
    }
}