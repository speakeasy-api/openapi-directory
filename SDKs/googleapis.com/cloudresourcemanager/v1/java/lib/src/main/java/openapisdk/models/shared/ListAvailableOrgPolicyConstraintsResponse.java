package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAvailableOrgPolicyConstraintsResponse
 * The response returned from the `ListAvailableOrgPolicyConstraints` method. Returns all `Constraints` that could be set at this level of the hierarchy (contrast with the response from `ListPolicies`, which returns all policies which are set).
**/
public class ListAvailableOrgPolicyConstraintsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraints")
    public Constraint[] constraints;
    public ListAvailableOrgPolicyConstraintsResponse withConstraints(Constraint[] constraints) {
        this.constraints = constraints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAvailableOrgPolicyConstraintsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}