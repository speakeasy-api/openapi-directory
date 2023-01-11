package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsEnableBackupActionResponse {
    @JsonProperty("action")
    public PostServersIdActionsEnableBackupActionResponseAction action;
    public PostServersIdActionsEnableBackupActionResponse withAction(PostServersIdActionsEnableBackupActionResponseAction action) {
        this.action = action;
        return this;
    }
}