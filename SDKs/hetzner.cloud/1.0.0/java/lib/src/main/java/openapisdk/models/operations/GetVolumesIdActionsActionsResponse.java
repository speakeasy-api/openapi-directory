package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetVolumesIdActionsActionsResponse {
    @JsonProperty("actions")
    public GetVolumesIdActionsActionsResponseAction[] actions;
    public GetVolumesIdActionsActionsResponse withActions(GetVolumesIdActionsActionsResponseAction[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetVolumesIdActionsActionsResponseMeta meta;
    public GetVolumesIdActionsActionsResponse withMeta(GetVolumesIdActionsActionsResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}