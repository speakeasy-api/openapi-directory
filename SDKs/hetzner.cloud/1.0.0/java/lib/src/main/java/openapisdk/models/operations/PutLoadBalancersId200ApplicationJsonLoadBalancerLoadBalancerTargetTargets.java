package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health_status")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus[] healthStatus;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets withHealthStatus(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus[] healthStatus) {
        this.healthStatus = healthStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer server;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets withServer(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer server) {
        this.server = server;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_private_ip")
    public Boolean usePrivateIp;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets withUsePrivateIp(Boolean usePrivateIp) {
        this.usePrivateIp = usePrivateIp;
        return this;
    }
}