package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetServersIdActionsActionsResponse {
    @JsonProperty("actions")
    public GetServersIdActionsActionsResponseAction[] actions;
    public GetServersIdActionsActionsResponse withActions(GetServersIdActionsActionsResponseAction[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetServersIdActionsActionsResponseMeta meta;
    public GetServersIdActionsActionsResponse withMeta(GetServersIdActionsActionsResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}