package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Certificate
 * A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas.
**/
public class Certificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuer")
    public String issuer;
    public Certificate withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notAfterTime")
    public String notAfterTime;
    public Certificate withNotAfterTime(String notAfterTime) {
        this.notAfterTime = notAfterTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notBeforeTime")
    public String notBeforeTime;
    public Certificate withNotBeforeTime(String notBeforeTime) {
        this.notBeforeTime = notBeforeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parsed")
    public Boolean parsed;
    public Certificate withParsed(Boolean parsed) {
        this.parsed = parsed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawDer")
    public String rawDer;
    public Certificate withRawDer(String rawDer) {
        this.rawDer = rawDer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serialNumber")
    public String serialNumber;
    public Certificate withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha256Fingerprint")
    public String sha256Fingerprint;
    public Certificate withSha256Fingerprint(String sha256Fingerprint) {
        this.sha256Fingerprint = sha256Fingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public String subject;
    public Certificate withSubject(String subject) {
        this.subject = subject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjectAlternativeDnsNames")
    public String[] subjectAlternativeDnsNames;
    public Certificate withSubjectAlternativeDnsNames(String[] subjectAlternativeDnsNames) {
        this.subjectAlternativeDnsNames = subjectAlternativeDnsNames;
        return this;
    }
}