package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_selector")
    public PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector labelSelector;
    public PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources withLabelSelector(PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesLabelSelector labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer server;
    public PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources withServer(PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer server) {
        this.server = server;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum type;
    public PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources withType(PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesTypeEnum type) {
        this.type = type;
        return this;
    }
}