package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GlobalSetPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bindings")
    public Binding[] bindings;
    public GlobalSetPolicyRequest withBindings(Binding[] bindings) {
        this.bindings = bindings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GlobalSetPolicyRequest withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public Policy policy;
    public GlobalSetPolicyRequest withPolicy(Policy policy) {
        this.policy = policy;
        return this;
    }
}