package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NetworkFollowEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public java.util.Map<String, Object> network;
    public NetworkFollowEmbedded withNetwork(java.util.Map<String, Object> network) {
        this.network = network;
        return this;
    }
}