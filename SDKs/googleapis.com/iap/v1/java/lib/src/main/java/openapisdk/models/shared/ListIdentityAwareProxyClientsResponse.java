package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListIdentityAwareProxyClientsResponse
 * Response message for ListIdentityAwareProxyClients.
**/
public class ListIdentityAwareProxyClientsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityAwareProxyClients")
    public IdentityAwareProxyClient[] identityAwareProxyClients;
    public ListIdentityAwareProxyClientsResponse withIdentityAwareProxyClients(IdentityAwareProxyClient[] identityAwareProxyClients) {
        this.identityAwareProxyClients = identityAwareProxyClients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListIdentityAwareProxyClientsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}