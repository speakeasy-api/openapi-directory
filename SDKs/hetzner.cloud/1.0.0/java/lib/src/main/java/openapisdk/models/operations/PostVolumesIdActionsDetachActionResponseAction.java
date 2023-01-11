package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostVolumesIdActionsDetachActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostVolumesIdActionsDetachActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostVolumesIdActionsDetachActionResponseActionError error;
    public PostVolumesIdActionsDetachActionResponseAction withError(PostVolumesIdActionsDetachActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostVolumesIdActionsDetachActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostVolumesIdActionsDetachActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostVolumesIdActionsDetachActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostVolumesIdActionsDetachActionResponseActionResources[] resources;
    public PostVolumesIdActionsDetachActionResponseAction withResources(PostVolumesIdActionsDetachActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostVolumesIdActionsDetachActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostVolumesIdActionsDetachActionResponseActionStatusEnum status;
    public PostVolumesIdActionsDetachActionResponseAction withStatus(PostVolumesIdActionsDetachActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}