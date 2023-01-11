package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsChangeAliasIpsActionResponse {
    @JsonProperty("action")
    public PostServersIdActionsChangeAliasIpsActionResponseAction action;
    public PostServersIdActionsChangeAliasIpsActionResponse withAction(PostServersIdActionsChangeAliasIpsActionResponseAction action) {
        this.action = action;
        return this;
    }
}