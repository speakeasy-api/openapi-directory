package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicysimulatorV1beta1ExplainedPolicy
 * Details about how a specific IAM Policy contributed to the access check.
**/
public class GoogleCloudPolicysimulatorV1beta1ExplainedPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access")
    public GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnum access;
    public GoogleCloudPolicysimulatorV1beta1ExplainedPolicy withAccess(GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnum access) {
        this.access = access;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bindingExplanations")
    public GoogleCloudPolicysimulatorV1beta1BindingExplanation[] bindingExplanations;
    public GoogleCloudPolicysimulatorV1beta1ExplainedPolicy withBindingExplanations(GoogleCloudPolicysimulatorV1beta1BindingExplanation[] bindingExplanations) {
        this.bindingExplanations = bindingExplanations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullResourceName")
    public String fullResourceName;
    public GoogleCloudPolicysimulatorV1beta1ExplainedPolicy withFullResourceName(String fullResourceName) {
        this.fullResourceName = fullResourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public GoogleIamV1Policy policy;
    public GoogleCloudPolicysimulatorV1beta1ExplainedPolicy withPolicy(GoogleIamV1Policy policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relevance")
    public GoogleCloudPolicysimulatorV1beta1ExplainedPolicyRelevanceEnum relevance;
    public GoogleCloudPolicysimulatorV1beta1ExplainedPolicy withRelevance(GoogleCloudPolicysimulatorV1beta1ExplainedPolicyRelevanceEnum relevance) {
        this.relevance = relevance;
        return this;
    }
}