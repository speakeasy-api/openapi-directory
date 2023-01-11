package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FeatureInput
 * Feature represents the settings and status of any Hub Feature.
**/
public class FeatureInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public FeatureInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membershipSpecs")
    public java.util.Map<String, MembershipFeatureSpecInput> membershipSpecs;
    public FeatureInput withMembershipSpecs(java.util.Map<String, MembershipFeatureSpecInput> membershipSpecs) {
        this.membershipSpecs = membershipSpecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceState")
    public FeatureResourceState resourceState;
    public FeatureInput withResourceState(FeatureResourceState resourceState) {
        this.resourceState = resourceState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopeSpecs")
    public java.util.Map<String, java.util.Map<String, Object>> scopeSpecs;
    public FeatureInput withScopeSpecs(java.util.Map<String, java.util.Map<String, Object>> scopeSpecs) {
        this.scopeSpecs = scopeSpecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public CommonFeatureSpec spec;
    public FeatureInput withSpec(CommonFeatureSpec spec) {
        this.spec = spec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public CommonFeatureState1 state;
    public FeatureInput withState(CommonFeatureState1 state) {
        this.state = state;
        return this;
    }
}