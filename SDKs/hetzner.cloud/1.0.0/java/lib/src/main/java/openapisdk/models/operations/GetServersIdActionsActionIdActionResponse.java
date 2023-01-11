package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServersIdActionsActionIdActionResponse {
    @JsonProperty("action")
    public GetServersIdActionsActionIdActionResponseAction action;
    public GetServersIdActionsActionIdActionResponse withAction(GetServersIdActionsActionIdActionResponseAction action) {
        this.action = action;
        return this;
    }
}