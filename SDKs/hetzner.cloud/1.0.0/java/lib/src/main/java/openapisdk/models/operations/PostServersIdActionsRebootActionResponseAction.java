package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsRebootActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsRebootActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsRebootActionResponseActionError error;
    public PostServersIdActionsRebootActionResponseAction withError(PostServersIdActionsRebootActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsRebootActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsRebootActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsRebootActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsRebootActionResponseActionResources[] resources;
    public PostServersIdActionsRebootActionResponseAction withResources(PostServersIdActionsRebootActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsRebootActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsRebootActionResponseActionStatusEnum status;
    public PostServersIdActionsRebootActionResponseAction withStatus(PostServersIdActionsRebootActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}