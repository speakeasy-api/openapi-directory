package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFloatingIpsIdActionsActionIdActionResponse {
    @JsonProperty("action")
    public GetFloatingIpsIdActionsActionIdActionResponseAction action;
    public GetFloatingIpsIdActionsActionIdActionResponse withAction(GetFloatingIpsIdActionsActionIdActionResponseAction action) {
        this.action = action;
        return this;
    }
}