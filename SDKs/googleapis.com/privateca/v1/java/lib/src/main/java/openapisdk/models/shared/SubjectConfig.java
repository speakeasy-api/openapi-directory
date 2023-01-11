package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubjectConfig
 * These values are used to create the distinguished name and subject alternative name fields in an X.509 certificate.
**/
public class SubjectConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public Subject subject;
    public SubjectConfig withSubject(Subject subject) {
        this.subject = subject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjectAltName")
    public SubjectAltNames subjectAltName;
    public SubjectConfig withSubjectAltName(SubjectAltNames subjectAltName) {
        this.subjectAltName = subjectAltName;
        return this;
    }
}