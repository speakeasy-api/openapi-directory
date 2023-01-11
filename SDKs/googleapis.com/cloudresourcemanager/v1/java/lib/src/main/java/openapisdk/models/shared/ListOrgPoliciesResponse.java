package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListOrgPoliciesResponse
 * The response returned from the `ListOrgPolicies` method. It will be empty if no `Policies` are set on the resource.
**/
public class ListOrgPoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListOrgPoliciesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policies")
    public OrgPolicy[] policies;
    public ListOrgPoliciesResponse withPolicies(OrgPolicy[] policies) {
        this.policies = policies;
        return this;
    }
}