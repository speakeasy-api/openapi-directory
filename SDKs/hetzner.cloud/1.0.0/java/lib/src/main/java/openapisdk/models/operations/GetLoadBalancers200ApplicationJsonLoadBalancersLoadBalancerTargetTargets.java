package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health_status")
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus[] healthStatus;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets withHealthStatus(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus[] healthStatus) {
        this.healthStatus = healthStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsServer server;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets withServer(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsServer server) {
        this.server = server;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_private_ip")
    public Boolean usePrivateIp;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets withUsePrivateIp(Boolean usePrivateIp) {
        this.usePrivateIp = usePrivateIp;
        return this;
    }
}