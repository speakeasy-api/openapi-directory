package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health_status")
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetHealthStatus[] healthStatus;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget withHealthStatus(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetHealthStatus[] healthStatus) {
        this.healthStatus = healthStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp ip;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget withIp(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_selector")
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector labelSelector;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget withLabelSelector(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer server;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget withServer(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer server) {
        this.server = server;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets[] targets;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget withTargets(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets[] targets) {
        this.targets = targets;
        return this;
    }
    @JsonProperty("type")
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTypeEnum type;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget withType(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_private_ip")
    public Boolean usePrivateIp;
    public GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget withUsePrivateIp(Boolean usePrivateIp) {
        this.usePrivateIp = usePrivateIp;
        return this;
    }
}