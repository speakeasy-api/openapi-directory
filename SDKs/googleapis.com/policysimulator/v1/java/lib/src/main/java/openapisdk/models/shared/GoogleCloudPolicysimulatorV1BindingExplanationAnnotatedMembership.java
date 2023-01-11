package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembership {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membership")
    public GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembershipMembershipEnum membership;
    public GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembership withMembership(GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembershipMembershipEnum membership) {
        this.membership = membership;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relevance")
    public GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembershipRelevanceEnum relevance;
    public GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembership withRelevance(GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembershipRelevanceEnum relevance) {
        this.relevance = relevance;
        return this;
    }
}