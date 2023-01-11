package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Policy
 * A bucket/object IAM policy.
**/
public class Policy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bindings")
    public PolicyBindings[] bindings;
    public Policy withBindings(PolicyBindings[] bindings) {
        this.bindings = bindings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Policy withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Policy withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public String resourceId;
    public Policy withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public Policy withVersion(Integer version) {
        this.version = version;
        return this;
    }
}