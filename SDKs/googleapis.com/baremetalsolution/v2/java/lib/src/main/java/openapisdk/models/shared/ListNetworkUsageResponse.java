package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListNetworkUsageResponse
 * Response with Networks with IPs
**/
public class ListNetworkUsageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networks")
    public NetworkUsage[] networks;
    public ListNetworkUsageResponse withNetworks(NetworkUsage[] networks) {
        this.networks = networks;
        return this;
    }
}