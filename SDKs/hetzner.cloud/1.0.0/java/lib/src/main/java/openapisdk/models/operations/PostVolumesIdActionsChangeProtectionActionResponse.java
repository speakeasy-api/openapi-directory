package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostVolumesIdActionsChangeProtectionActionResponse {
    @JsonProperty("action")
    public PostVolumesIdActionsChangeProtectionActionResponseAction action;
    public PostVolumesIdActionsChangeProtectionActionResponse withAction(PostVolumesIdActionsChangeProtectionActionResponseAction action) {
        this.action = action;
        return this;
    }
}