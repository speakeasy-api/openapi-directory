package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsAttachIsoActionResponse {
    @JsonProperty("action")
    public PostServersIdActionsAttachIsoActionResponseAction action;
    public PostServersIdActionsAttachIsoActionResponse withAction(PostServersIdActionsAttachIsoActionResponseAction action) {
        this.action = action;
        return this;
    }
}