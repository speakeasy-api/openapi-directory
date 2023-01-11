package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest {
    @JsonProperty("network")
    public Long network;
    public PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest withNetwork(Long network) {
        this.network = network;
        return this;
    }
}