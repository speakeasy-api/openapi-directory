package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostServersIdActionsResetPassword201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public PostServersIdActionsResetPassword201ApplicationJsonAction action;
    public PostServersIdActionsResetPassword201ApplicationJson withAction(PostServersIdActionsResetPassword201ApplicationJsonAction action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("root_password")
    public String rootPassword;
    public PostServersIdActionsResetPassword201ApplicationJson withRootPassword(String rootPassword) {
        this.rootPassword = rootPassword;
        return this;
    }
}