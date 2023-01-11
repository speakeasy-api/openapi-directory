package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsShutdownActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsShutdownActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsShutdownActionResponseActionError error;
    public PostServersIdActionsShutdownActionResponseAction withError(PostServersIdActionsShutdownActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsShutdownActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsShutdownActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsShutdownActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsShutdownActionResponseActionResources[] resources;
    public PostServersIdActionsShutdownActionResponseAction withResources(PostServersIdActionsShutdownActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsShutdownActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsShutdownActionResponseActionStatusEnum status;
    public PostServersIdActionsShutdownActionResponseAction withStatus(PostServersIdActionsShutdownActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}