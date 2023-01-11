package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public String ip;
    public PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public Long network;
    public PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet withNetwork(Long network) {
        this.network = network;
        return this;
    }
}