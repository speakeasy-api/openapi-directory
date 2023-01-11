package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListEndpointPoliciesResponse
 * Response returned by the ListEndpointPolicies method.
**/
public class ListEndpointPoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointPolicies")
    public EndpointPolicy[] endpointPolicies;
    public ListEndpointPoliciesResponse withEndpointPolicies(EndpointPolicy[] endpointPolicies) {
        this.endpointPolicies = endpointPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListEndpointPoliciesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}