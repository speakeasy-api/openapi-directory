package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetNetworksId200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public GetNetworksId200ApplicationJsonNetwork network;
    public GetNetworksId200ApplicationJson withNetwork(GetNetworksId200ApplicationJsonNetwork network) {
        this.network = network;
        return this;
    }
}