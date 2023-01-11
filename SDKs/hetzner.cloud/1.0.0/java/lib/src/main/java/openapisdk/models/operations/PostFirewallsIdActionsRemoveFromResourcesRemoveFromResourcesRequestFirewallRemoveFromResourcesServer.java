package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer
 * Configuration for type server, required if type is `server`
**/
public class PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer {
    @JsonProperty("id")
    public Long id;
    public PostFirewallsIdActionsRemoveFromResourcesRemoveFromResourcesRequestFirewallRemoveFromResourcesServer withId(Long id) {
        this.id = id;
        return this;
    }
}