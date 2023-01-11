package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsRequestConsole201ApplicationJson {
    @JsonProperty("action")
    public PostServersIdActionsRequestConsole201ApplicationJsonAction action;
    public PostServersIdActionsRequestConsole201ApplicationJson withAction(PostServersIdActionsRequestConsole201ApplicationJsonAction action) {
        this.action = action;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public PostServersIdActionsRequestConsole201ApplicationJson withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("wss_url")
    public String wssUrl;
    public PostServersIdActionsRequestConsole201ApplicationJson withWssUrl(String wssUrl) {
        this.wssUrl = wssUrl;
        return this;
    }
}