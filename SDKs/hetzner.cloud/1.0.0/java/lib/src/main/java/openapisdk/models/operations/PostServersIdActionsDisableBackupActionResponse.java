package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsDisableBackupActionResponse {
    @JsonProperty("action")
    public PostServersIdActionsDisableBackupActionResponseAction action;
    public PostServersIdActionsDisableBackupActionResponse withAction(PostServersIdActionsDisableBackupActionResponseAction action) {
        this.action = action;
        return this;
    }
}