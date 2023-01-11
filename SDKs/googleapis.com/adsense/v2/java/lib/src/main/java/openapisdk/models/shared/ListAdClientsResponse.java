package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAdClientsResponse
 * Response definition for the ad client list rpc.
**/
public class ListAdClientsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adClients")
    public AdClient[] adClients;
    public ListAdClientsResponse withAdClients(AdClient[] adClients) {
        this.adClients = adClients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAdClientsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}