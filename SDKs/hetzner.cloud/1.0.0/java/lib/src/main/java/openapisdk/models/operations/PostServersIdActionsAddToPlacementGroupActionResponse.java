package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsAddToPlacementGroupActionResponse {
    @JsonProperty("action")
    public PostServersIdActionsAddToPlacementGroupActionResponseAction action;
    public PostServersIdActionsAddToPlacementGroupActionResponse withAction(PostServersIdActionsAddToPlacementGroupActionResponseAction action) {
        this.action = action;
        return this;
    }
}