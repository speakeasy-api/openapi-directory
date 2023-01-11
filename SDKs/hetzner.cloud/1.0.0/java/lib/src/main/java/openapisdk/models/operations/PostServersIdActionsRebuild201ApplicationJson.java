package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostServersIdActionsRebuild201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public PostServersIdActionsRebuild201ApplicationJsonAction action;
    public PostServersIdActionsRebuild201ApplicationJson withAction(PostServersIdActionsRebuild201ApplicationJsonAction action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("root_password")
    public String rootPassword;
    public PostServersIdActionsRebuild201ApplicationJson withRootPassword(String rootPassword) {
        this.rootPassword = rootPassword;
        return this;
    }
}