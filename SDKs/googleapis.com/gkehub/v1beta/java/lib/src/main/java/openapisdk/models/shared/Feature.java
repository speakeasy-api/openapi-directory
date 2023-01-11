package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Feature
 * Feature represents the settings and status of any Hub Feature.
**/
public class Feature {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Feature withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteTime")
    public String deleteTime;
    public Feature withDeleteTime(String deleteTime) {
        this.deleteTime = deleteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Feature withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membershipSpecs")
    public java.util.Map<String, MembershipFeatureSpec> membershipSpecs;
    public Feature withMembershipSpecs(java.util.Map<String, MembershipFeatureSpec> membershipSpecs) {
        this.membershipSpecs = membershipSpecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membershipStates")
    public java.util.Map<String, MembershipFeatureState> membershipStates;
    public Feature withMembershipStates(java.util.Map<String, MembershipFeatureState> membershipStates) {
        this.membershipStates = membershipStates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Feature withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceState")
    public FeatureResourceState resourceState;
    public Feature withResourceState(FeatureResourceState resourceState) {
        this.resourceState = resourceState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopeSpecs")
    public java.util.Map<String, java.util.Map<String, Object>> scopeSpecs;
    public Feature withScopeSpecs(java.util.Map<String, java.util.Map<String, Object>> scopeSpecs) {
        this.scopeSpecs = scopeSpecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopeStates")
    public java.util.Map<String, ScopeFeatureState> scopeStates;
    public Feature withScopeStates(java.util.Map<String, ScopeFeatureState> scopeStates) {
        this.scopeStates = scopeStates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public CommonFeatureSpec spec;
    public Feature withSpec(CommonFeatureSpec spec) {
        this.spec = spec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public CommonFeatureState state;
    public Feature withState(CommonFeatureState state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Feature withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}