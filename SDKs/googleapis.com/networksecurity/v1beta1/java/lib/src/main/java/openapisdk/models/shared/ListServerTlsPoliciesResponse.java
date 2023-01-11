package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListServerTlsPoliciesResponse
 * Response returned by the ListServerTlsPolicies method.
**/
public class ListServerTlsPoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListServerTlsPoliciesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverTlsPolicies")
    public ServerTlsPolicy[] serverTlsPolicies;
    public ListServerTlsPoliciesResponse withServerTlsPolicies(ServerTlsPolicy[] serverTlsPolicies) {
        this.serverTlsPolicies = serverTlsPolicies;
        return this;
    }
}