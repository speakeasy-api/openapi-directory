package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsResetPassword201ApplicationJsonAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsResetPassword201ApplicationJsonAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsResetPassword201ApplicationJsonActionError error;
    public PostServersIdActionsResetPassword201ApplicationJsonAction withError(PostServersIdActionsResetPassword201ApplicationJsonActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsResetPassword201ApplicationJsonAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsResetPassword201ApplicationJsonAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsResetPassword201ApplicationJsonAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsResetPassword201ApplicationJsonActionResources[] resources;
    public PostServersIdActionsResetPassword201ApplicationJsonAction withResources(PostServersIdActionsResetPassword201ApplicationJsonActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsResetPassword201ApplicationJsonAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsResetPassword201ApplicationJsonActionStatusEnum status;
    public PostServersIdActionsResetPassword201ApplicationJsonAction withStatus(PostServersIdActionsResetPassword201ApplicationJsonActionStatusEnum status) {
        this.status = status;
        return this;
    }
}