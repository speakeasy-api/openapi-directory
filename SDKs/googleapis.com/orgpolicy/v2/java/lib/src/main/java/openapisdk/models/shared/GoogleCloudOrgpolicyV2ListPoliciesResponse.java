package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudOrgpolicyV2ListPoliciesResponse
 * The response returned from the ListPolicies method. It will be empty if no `Policies` are set on the resource.
**/
public class GoogleCloudOrgpolicyV2ListPoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudOrgpolicyV2ListPoliciesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policies")
    public GoogleCloudOrgpolicyV2Policy[] policies;
    public GoogleCloudOrgpolicyV2ListPoliciesResponse withPolicies(GoogleCloudOrgpolicyV2Policy[] policies) {
        this.policies = policies;
        return this;
    }
}