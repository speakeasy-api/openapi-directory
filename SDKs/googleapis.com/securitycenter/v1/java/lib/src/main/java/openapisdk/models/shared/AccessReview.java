package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccessReview
 * Conveys information about a Kubernetes access review (e.g. kubectl auth can-i ...) that was involved in a finding.
**/
public class AccessReview {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public String group;
    public AccessReview withGroup(String group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AccessReview withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ns")
    public String ns;
    public AccessReview withNs(String ns) {
        this.ns = ns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public String resource;
    public AccessReview withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subresource")
    public String subresource;
    public AccessReview withSubresource(String subresource) {
        this.subresource = subresource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verb")
    public String verb;
    public AccessReview withVerb(String verb) {
        this.verb = verb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public AccessReview withVersion(String version) {
        this.version = version;
        return this;
    }
}