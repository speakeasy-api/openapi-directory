package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health_status")
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus[] healthStatus;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets withHealthStatus(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus[] healthStatus) {
        this.healthStatus = healthStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer server;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets withServer(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer server) {
        this.server = server;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_private_ip")
    public Boolean usePrivateIp;
    public PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets withUsePrivateIp(Boolean usePrivateIp) {
        this.usePrivateIp = usePrivateIp;
        return this;
    }
}