package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsRemoveFromPlacementGroupActionResponse {
    @JsonProperty("action")
    public PostServersIdActionsRemoveFromPlacementGroupActionResponseAction action;
    public PostServersIdActionsRemoveFromPlacementGroupActionResponse withAction(PostServersIdActionsRemoveFromPlacementGroupActionResponseAction action) {
        this.action = action;
        return this;
    }
}