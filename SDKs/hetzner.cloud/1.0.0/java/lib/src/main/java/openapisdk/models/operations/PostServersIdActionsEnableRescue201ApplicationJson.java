package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostServersIdActionsEnableRescue201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public PostServersIdActionsEnableRescue201ApplicationJsonAction action;
    public PostServersIdActionsEnableRescue201ApplicationJson withAction(PostServersIdActionsEnableRescue201ApplicationJsonAction action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("root_password")
    public String rootPassword;
    public PostServersIdActionsEnableRescue201ApplicationJson withRootPassword(String rootPassword) {
        this.rootPassword = rootPassword;
        return this;
    }
}