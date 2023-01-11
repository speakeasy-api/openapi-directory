package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetImagesIdActionsActionsResponse {
    @JsonProperty("actions")
    public GetImagesIdActionsActionsResponseAction[] actions;
    public GetImagesIdActionsActionsResponse withActions(GetImagesIdActionsActionsResponseAction[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetImagesIdActionsActionsResponseMeta meta;
    public GetImagesIdActionsActionsResponse withMeta(GetImagesIdActionsActionsResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}