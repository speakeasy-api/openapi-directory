package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostLoadBalancersIdActionsAttachToNetworkRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public String ip;
    public PostLoadBalancersIdActionsAttachToNetworkRequestBody withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("network")
    public Double network;
    public PostLoadBalancersIdActionsAttachToNetworkRequestBody withNetwork(Double network) {
        this.network = network;
        return this;
    }
}