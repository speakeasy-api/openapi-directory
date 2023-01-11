package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health_status")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus[] healthStatus;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets withHealthStatus(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus[] healthStatus) {
        this.healthStatus = healthStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer server;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets withServer(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer server) {
        this.server = server;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_private_ip")
    public Boolean usePrivateIp;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets withUsePrivateIp(Boolean usePrivateIp) {
        this.usePrivateIp = usePrivateIp;
        return this;
    }
}