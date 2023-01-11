package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersCreateServerResponse {
    @JsonProperty("action")
    public PostServersCreateServerResponseAction action;
    public PostServersCreateServerResponse withAction(PostServersCreateServerResponseAction action) {
        this.action = action;
        return this;
    }
    @JsonProperty("next_actions")
    public PostServersCreateServerResponseAction[] nextActions;
    public PostServersCreateServerResponse withNextActions(PostServersCreateServerResponseAction[] nextActions) {
        this.nextActions = nextActions;
        return this;
    }
    @JsonProperty("root_password")
    public String rootPassword;
    public PostServersCreateServerResponse withRootPassword(String rootPassword) {
        this.rootPassword = rootPassword;
        return this;
    }
    @JsonProperty("server")
    public PostServersCreateServerResponseServer server;
    public PostServersCreateServerResponse withServer(PostServersCreateServerResponseServer server) {
        this.server = server;
        return this;
    }
}