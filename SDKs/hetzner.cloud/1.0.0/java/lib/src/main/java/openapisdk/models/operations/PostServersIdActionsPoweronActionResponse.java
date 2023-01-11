package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsPoweronActionResponse {
    @JsonProperty("action")
    public PostServersIdActionsPoweronActionResponseAction action;
    public PostServersIdActionsPoweronActionResponse withAction(PostServersIdActionsPoweronActionResponseAction action) {
        this.action = action;
        return this;
    }
}