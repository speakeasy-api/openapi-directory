package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostVolumesIdActionsAttachActionResponse {
    @JsonProperty("action")
    public PostVolumesIdActionsAttachActionResponseAction action;
    public PostVolumesIdActionsAttachActionResponse withAction(PostVolumesIdActionsAttachActionResponseAction action) {
        this.action = action;
        return this;
    }
}