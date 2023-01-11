package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membership")
    public GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipMembershipEnum membership;
    public GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership withMembership(GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipMembershipEnum membership) {
        this.membership = membership;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relevance")
    public GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipRelevanceEnum relevance;
    public GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership withRelevance(GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipRelevanceEnum relevance) {
        this.relevance = relevance;
        return this;
    }
}