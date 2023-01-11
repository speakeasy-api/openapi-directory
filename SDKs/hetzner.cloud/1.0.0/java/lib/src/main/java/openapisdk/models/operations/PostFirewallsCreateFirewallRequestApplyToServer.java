package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostFirewallsCreateFirewallRequestApplyToServer
 * Configuration for type Server, required if type is `server`
**/
public class PostFirewallsCreateFirewallRequestApplyToServer {
    @JsonProperty("id")
    public Long id;
    public PostFirewallsCreateFirewallRequestApplyToServer withId(Long id) {
        this.id = id;
        return this;
    }
}