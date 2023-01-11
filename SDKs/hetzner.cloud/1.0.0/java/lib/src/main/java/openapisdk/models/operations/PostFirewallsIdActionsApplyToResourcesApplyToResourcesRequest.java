package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest {
    @JsonProperty("apply_to")
    public PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources[] applyTo;
    public PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequest withApplyTo(PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResources[] applyTo) {
        this.applyTo = applyTo;
        return this;
    }
}