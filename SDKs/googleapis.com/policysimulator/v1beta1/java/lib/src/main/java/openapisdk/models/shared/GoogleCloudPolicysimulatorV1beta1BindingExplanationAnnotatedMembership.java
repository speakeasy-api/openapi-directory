package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembership {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membership")
    public GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipMembershipEnum membership;
    public GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembership withMembership(GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipMembershipEnum membership) {
        this.membership = membership;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relevance")
    public GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipRelevanceEnum relevance;
    public GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembership withRelevance(GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipRelevanceEnum relevance) {
        this.relevance = relevance;
        return this;
    }
}