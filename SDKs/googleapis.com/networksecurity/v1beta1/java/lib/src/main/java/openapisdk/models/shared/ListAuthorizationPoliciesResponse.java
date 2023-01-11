package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAuthorizationPoliciesResponse
 * Response returned by the ListAuthorizationPolicies method.
**/
public class ListAuthorizationPoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizationPolicies")
    public AuthorizationPolicy[] authorizationPolicies;
    public ListAuthorizationPoliciesResponse withAuthorizationPolicies(AuthorizationPolicy[] authorizationPolicies) {
        this.authorizationPolicies = authorizationPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAuthorizationPoliciesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}