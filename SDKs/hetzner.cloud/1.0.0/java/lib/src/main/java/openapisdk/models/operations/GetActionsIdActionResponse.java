package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetActionsIdActionResponse {
    @JsonProperty("action")
    public GetActionsIdActionResponseAction action;
    public GetActionsIdActionResponse withAction(GetActionsIdActionResponseAction action) {
        this.action = action;
        return this;
    }
}