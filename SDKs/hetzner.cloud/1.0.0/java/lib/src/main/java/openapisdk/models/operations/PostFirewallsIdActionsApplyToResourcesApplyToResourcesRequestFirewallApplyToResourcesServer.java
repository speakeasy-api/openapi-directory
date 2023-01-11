package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer
 * Configuration for type server, required if type is `server`
**/
public class PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer {
    @JsonProperty("id")
    public Long id;
    public PostFirewallsIdActionsApplyToResourcesApplyToResourcesRequestFirewallApplyToResourcesServer withId(Long id) {
        this.id = id;
        return this;
    }
}