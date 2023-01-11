package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetActionsActionsResponse {
    @JsonProperty("actions")
    public GetActionsActionsResponseAction[] actions;
    public GetActionsActionsResponse withActions(GetActionsActionsResponseAction[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetActionsActionsResponseMeta meta;
    public GetActionsActionsResponse withMeta(GetActionsActionsResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}