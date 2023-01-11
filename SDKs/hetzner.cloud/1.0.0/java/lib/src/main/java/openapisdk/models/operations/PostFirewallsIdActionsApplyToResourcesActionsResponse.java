package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostFirewallsIdActionsApplyToResourcesActionsResponse {
    @JsonProperty("actions")
    public PostFirewallsIdActionsApplyToResourcesActionsResponseAction[] actions;
    public PostFirewallsIdActionsApplyToResourcesActionsResponse withActions(PostFirewallsIdActionsApplyToResourcesActionsResponseAction[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public PostFirewallsIdActionsApplyToResourcesActionsResponseMeta meta;
    public PostFirewallsIdActionsApplyToResourcesActionsResponse withMeta(PostFirewallsIdActionsApplyToResourcesActionsResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}