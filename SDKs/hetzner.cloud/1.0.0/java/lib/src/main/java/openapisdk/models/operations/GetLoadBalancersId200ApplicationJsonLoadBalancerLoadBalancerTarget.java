package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health_status")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus[] healthStatus;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget withHealthStatus(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus[] healthStatus) {
        this.healthStatus = healthStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp ip;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget withIp(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_selector")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector labelSelector;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget withLabelSelector(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer server;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget withServer(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer server) {
        this.server = server;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets[] targets;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget withTargets(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets[] targets) {
        this.targets = targets;
        return this;
    }
    @JsonProperty("type")
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum type;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget withType(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_private_ip")
    public Boolean usePrivateIp;
    public GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget withUsePrivateIp(Boolean usePrivateIp) {
        this.usePrivateIp = usePrivateIp;
        return this;
    }
}