package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetImagesIdActionsActionIdActionResponse {
    @JsonProperty("action")
    public GetImagesIdActionsActionIdActionResponseAction action;
    public GetImagesIdActionsActionIdActionResponse withAction(GetImagesIdActionsActionIdActionResponseAction action) {
        this.action = action;
        return this;
    }
}