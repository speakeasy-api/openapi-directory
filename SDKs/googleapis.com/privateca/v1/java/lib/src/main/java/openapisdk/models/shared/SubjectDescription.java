package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubjectDescription
 * These values describe fields in an issued X.509 certificate such as the distinguished name, subject alternative names, serial number, and lifetime.
**/
public class SubjectDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hexSerialNumber")
    public String hexSerialNumber;
    public SubjectDescription withHexSerialNumber(String hexSerialNumber) {
        this.hexSerialNumber = hexSerialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifetime")
    public String lifetime;
    public SubjectDescription withLifetime(String lifetime) {
        this.lifetime = lifetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notAfterTime")
    public String notAfterTime;
    public SubjectDescription withNotAfterTime(String notAfterTime) {
        this.notAfterTime = notAfterTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notBeforeTime")
    public String notBeforeTime;
    public SubjectDescription withNotBeforeTime(String notBeforeTime) {
        this.notBeforeTime = notBeforeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public Subject subject;
    public SubjectDescription withSubject(Subject subject) {
        this.subject = subject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjectAltName")
    public SubjectAltNames subjectAltName;
    public SubjectDescription withSubjectAltName(SubjectAltNames subjectAltName) {
        this.subjectAltName = subjectAltName;
        return this;
    }
}