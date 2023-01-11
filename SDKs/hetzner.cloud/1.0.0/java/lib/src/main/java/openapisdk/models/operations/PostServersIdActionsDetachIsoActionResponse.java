package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsDetachIsoActionResponse {
    @JsonProperty("action")
    public PostServersIdActionsDetachIsoActionResponseAction action;
    public PostServersIdActionsDetachIsoActionResponse withAction(PostServersIdActionsDetachIsoActionResponseAction action) {
        this.action = action;
        return this;
    }
}