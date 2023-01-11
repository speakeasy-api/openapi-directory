package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostVolumesIdActionsDetachActionResponse {
    @JsonProperty("action")
    public PostVolumesIdActionsDetachActionResponseAction action;
    public PostVolumesIdActionsDetachActionResponse withAction(PostVolumesIdActionsDetachActionResponseAction action) {
        this.action = action;
        return this;
    }
}