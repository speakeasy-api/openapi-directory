package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsResetActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsResetActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsResetActionResponseActionError error;
    public PostServersIdActionsResetActionResponseAction withError(PostServersIdActionsResetActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsResetActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsResetActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsResetActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsResetActionResponseActionResources[] resources;
    public PostServersIdActionsResetActionResponseAction withResources(PostServersIdActionsResetActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsResetActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsResetActionResponseActionStatusEnum status;
    public PostServersIdActionsResetActionResponseAction withStatus(PostServersIdActionsResetActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}