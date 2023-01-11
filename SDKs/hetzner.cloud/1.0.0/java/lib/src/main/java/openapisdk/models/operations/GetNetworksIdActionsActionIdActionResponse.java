package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNetworksIdActionsActionIdActionResponse {
    @JsonProperty("action")
    public GetNetworksIdActionsActionIdActionResponseAction action;
    public GetNetworksIdActionsActionIdActionResponse withAction(GetNetworksIdActionsActionIdActionResponseAction action) {
        this.action = action;
        return this;
    }
}