package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public String ip;
    public GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public Long network;
    public GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet withNetwork(Long network) {
        this.network = network;
        return this;
    }
}