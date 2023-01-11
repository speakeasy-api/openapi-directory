package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetVolumesIdActionsActionIdActionResponse {
    @JsonProperty("action")
    public GetVolumesIdActionsActionIdActionResponseAction action;
    public GetVolumesIdActionsActionIdActionResponse withAction(GetVolumesIdActionsActionIdActionResponseAction action) {
        this.action = action;
        return this;
    }
}