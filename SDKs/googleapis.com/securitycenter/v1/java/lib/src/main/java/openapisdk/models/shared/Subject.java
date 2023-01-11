package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Subject
 * Represents a Kubernetes Subject.
**/
public class Subject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public SubjectKindEnum kind;
    public Subject withKind(SubjectKindEnum kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Subject withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ns")
    public String ns;
    public Subject withNs(String ns) {
        this.ns = ns;
        return this;
    }
}