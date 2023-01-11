package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutNetworksId200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public PutNetworksId200ApplicationJsonNetwork network;
    public PutNetworksId200ApplicationJson withNetwork(PutNetworksId200ApplicationJsonNetwork network) {
        this.network = network;
        return this;
    }
}