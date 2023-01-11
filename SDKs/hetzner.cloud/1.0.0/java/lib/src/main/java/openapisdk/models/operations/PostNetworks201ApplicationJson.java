package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostNetworks201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public PostNetworks201ApplicationJsonNetwork network;
    public PostNetworks201ApplicationJson withNetwork(PostNetworks201ApplicationJsonNetwork network) {
        this.network = network;
        return this;
    }
}