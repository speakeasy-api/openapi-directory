package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listen_port")
    public Long listenPort;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus withListenPort(Long listenPort) {
        this.listenPort = listenPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus withStatus(String status) {
        this.status = status;
        return this;
    }
}