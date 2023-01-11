package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health_status")
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus[] healthStatus;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget withHealthStatus(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus[] healthStatus) {
        this.healthStatus = healthStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIp ip;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget withIp(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIp ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_selector")
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector labelSelector;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget withLabelSelector(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer server;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget withServer(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer server) {
        this.server = server;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets[] targets;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget withTargets(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets[] targets) {
        this.targets = targets;
        return this;
    }
    @JsonProperty("type")
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum type;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget withType(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_private_ip")
    public Boolean usePrivateIp;
    public PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget withUsePrivateIp(Boolean usePrivateIp) {
        this.usePrivateIp = usePrivateIp;
        return this;
    }
}