package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicytroubleshooterV1ExplainedPolicy
 * Details about how a specific IAM Policy contributed to the access check.
**/
public class GoogleCloudPolicytroubleshooterV1ExplainedPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access")
    public GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum access;
    public GoogleCloudPolicytroubleshooterV1ExplainedPolicy withAccess(GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum access) {
        this.access = access;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bindingExplanations")
    public GoogleCloudPolicytroubleshooterV1BindingExplanation[] bindingExplanations;
    public GoogleCloudPolicytroubleshooterV1ExplainedPolicy withBindingExplanations(GoogleCloudPolicytroubleshooterV1BindingExplanation[] bindingExplanations) {
        this.bindingExplanations = bindingExplanations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullResourceName")
    public String fullResourceName;
    public GoogleCloudPolicytroubleshooterV1ExplainedPolicy withFullResourceName(String fullResourceName) {
        this.fullResourceName = fullResourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public GoogleIamV1Policy policy;
    public GoogleCloudPolicytroubleshooterV1ExplainedPolicy withPolicy(GoogleIamV1Policy policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relevance")
    public GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnum relevance;
    public GoogleCloudPolicytroubleshooterV1ExplainedPolicy withRelevance(GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnum relevance) {
        this.relevance = relevance;
        return this;
    }
}