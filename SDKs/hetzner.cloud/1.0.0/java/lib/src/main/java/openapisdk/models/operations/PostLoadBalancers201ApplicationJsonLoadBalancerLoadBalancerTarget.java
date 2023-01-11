package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health_status")
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus[] healthStatus;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget withHealthStatus(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus[] healthStatus) {
        this.healthStatus = healthStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetIp ip;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget withIp(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetIp ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_selector")
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector labelSelector;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget withLabelSelector(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer server;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget withServer(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer server) {
        this.server = server;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets[] targets;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget withTargets(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets[] targets) {
        this.targets = targets;
        return this;
    }
    @JsonProperty("type")
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum type;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget withType(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_private_ip")
    public Boolean usePrivateIp;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget withUsePrivateIp(Boolean usePrivateIp) {
        this.usePrivateIp = usePrivateIp;
        return this;
    }
}