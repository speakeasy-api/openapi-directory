package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicytroubleshooterV1betaExplainedPolicy
 * Details about how a specific IAM Policy contributed to the access check.
**/
public class GoogleCloudPolicytroubleshooterV1betaExplainedPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access")
    public GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnum access;
    public GoogleCloudPolicytroubleshooterV1betaExplainedPolicy withAccess(GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnum access) {
        this.access = access;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bindingExplanations")
    public GoogleCloudPolicytroubleshooterV1betaBindingExplanation[] bindingExplanations;
    public GoogleCloudPolicytroubleshooterV1betaExplainedPolicy withBindingExplanations(GoogleCloudPolicytroubleshooterV1betaBindingExplanation[] bindingExplanations) {
        this.bindingExplanations = bindingExplanations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullResourceName")
    public String fullResourceName;
    public GoogleCloudPolicytroubleshooterV1betaExplainedPolicy withFullResourceName(String fullResourceName) {
        this.fullResourceName = fullResourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public GoogleIamV1Policy policy;
    public GoogleCloudPolicytroubleshooterV1betaExplainedPolicy withPolicy(GoogleIamV1Policy policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relevance")
    public GoogleCloudPolicytroubleshooterV1betaExplainedPolicyRelevanceEnum relevance;
    public GoogleCloudPolicytroubleshooterV1betaExplainedPolicy withRelevance(GoogleCloudPolicytroubleshooterV1betaExplainedPolicyRelevanceEnum relevance) {
        this.relevance = relevance;
        return this;
    }
}