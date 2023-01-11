package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp ip;
    public PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest withIp(PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_selector")
    public PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector labelSelector;
    public PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest withLabelSelector(PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer server;
    public PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest withServer(PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer server) {
        this.server = server;
        return this;
    }
    @JsonProperty("type")
    public PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum type;
    public PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest withType(PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum type) {
        this.type = type;
        return this;
    }
}