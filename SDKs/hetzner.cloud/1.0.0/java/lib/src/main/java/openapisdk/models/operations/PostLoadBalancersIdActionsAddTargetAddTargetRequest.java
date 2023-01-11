package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostLoadBalancersIdActionsAddTargetAddTargetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public PostLoadBalancersIdActionsAddTargetAddTargetRequestIp ip;
    public PostLoadBalancersIdActionsAddTargetAddTargetRequest withIp(PostLoadBalancersIdActionsAddTargetAddTargetRequestIp ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_selector")
    public PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector labelSelector;
    public PostLoadBalancersIdActionsAddTargetAddTargetRequest withLabelSelector(PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public PostLoadBalancersIdActionsAddTargetAddTargetRequestServer server;
    public PostLoadBalancersIdActionsAddTargetAddTargetRequest withServer(PostLoadBalancersIdActionsAddTargetAddTargetRequestServer server) {
        this.server = server;
        return this;
    }
    @JsonProperty("type")
    public PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum type;
    public PostLoadBalancersIdActionsAddTargetAddTargetRequest withType(PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_private_ip")
    public Boolean usePrivateIp;
    public PostLoadBalancersIdActionsAddTargetAddTargetRequest withUsePrivateIp(Boolean usePrivateIp) {
        this.usePrivateIp = usePrivateIp;
        return this;
    }
}