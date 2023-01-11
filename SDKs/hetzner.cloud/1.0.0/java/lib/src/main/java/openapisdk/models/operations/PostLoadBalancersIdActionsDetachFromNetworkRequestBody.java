package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsDetachFromNetworkRequestBody {
    @JsonProperty("network")
    public Double network;
    public PostLoadBalancersIdActionsDetachFromNetworkRequestBody withNetwork(Double network) {
        this.network = network;
        return this;
    }
}