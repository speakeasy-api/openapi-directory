package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostVolumesIdActionsResizeActionResponse {
    @JsonProperty("action")
    public PostVolumesIdActionsResizeActionResponseAction action;
    public PostVolumesIdActionsResizeActionResponse withAction(PostVolumesIdActionsResizeActionResponseAction action) {
        this.action = action;
        return this;
    }
}