package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostImagesIdActionsChangeProtectionActionResponse {
    @JsonProperty("action")
    public PostImagesIdActionsChangeProtectionActionResponseAction action;
    public PostImagesIdActionsChangeProtectionActionResponse withAction(PostImagesIdActionsChangeProtectionActionResponseAction action) {
        this.action = action;
        return this;
    }
}