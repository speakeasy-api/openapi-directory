package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsPoweroffActionResponse {
    @JsonProperty("action")
    public PostServersIdActionsPoweroffActionResponseAction action;
    public PostServersIdActionsPoweroffActionResponse withAction(PostServersIdActionsPoweroffActionResponseAction action) {
        this.action = action;
        return this;
    }
}