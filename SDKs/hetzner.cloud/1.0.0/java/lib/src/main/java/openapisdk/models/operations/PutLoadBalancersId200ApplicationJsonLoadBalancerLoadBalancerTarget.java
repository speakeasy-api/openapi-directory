package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health_status")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus[] healthStatus;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget withHealthStatus(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus[] healthStatus) {
        this.healthStatus = healthStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp ip;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget withIp(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_selector")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector labelSelector;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget withLabelSelector(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer server;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget withServer(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer server) {
        this.server = server;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets[] targets;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget withTargets(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets[] targets) {
        this.targets = targets;
        return this;
    }
    @JsonProperty("type")
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum type;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget withType(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_private_ip")
    public Boolean usePrivateIp;
    public PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget withUsePrivateIp(Boolean usePrivateIp) {
        this.usePrivateIp = usePrivateIp;
        return this;
    }
}