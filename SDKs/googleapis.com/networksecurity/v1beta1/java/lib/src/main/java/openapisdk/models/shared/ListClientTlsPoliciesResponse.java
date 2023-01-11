package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListClientTlsPoliciesResponse
 * Response returned by the ListClientTlsPolicies method.
**/
public class ListClientTlsPoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientTlsPolicies")
    public ClientTlsPolicy[] clientTlsPolicies;
    public ListClientTlsPoliciesResponse withClientTlsPolicies(ClientTlsPolicy[] clientTlsPolicies) {
        this.clientTlsPolicies = clientTlsPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListClientTlsPoliciesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}