package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membership")
    public GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembershipEnum membership;
    public GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership withMembership(GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembershipEnum membership) {
        this.membership = membership;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relevance")
    public GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevanceEnum relevance;
    public GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership withRelevance(GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevanceEnum relevance) {
        this.relevance = relevance;
        return this;
    }
}