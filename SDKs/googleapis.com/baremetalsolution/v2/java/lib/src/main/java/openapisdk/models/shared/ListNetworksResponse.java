package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListNetworksResponse
 * Response message containing the list of networks.
**/
public class ListNetworksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networks")
    public Network[] networks;
    public ListNetworksResponse withNetworks(Network[] networks) {
        this.networks = networks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListNetworksResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListNetworksResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}