package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostVolumesIdActionsResizeActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostVolumesIdActionsResizeActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostVolumesIdActionsResizeActionResponseActionError error;
    public PostVolumesIdActionsResizeActionResponseAction withError(PostVolumesIdActionsResizeActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostVolumesIdActionsResizeActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostVolumesIdActionsResizeActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostVolumesIdActionsResizeActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostVolumesIdActionsResizeActionResponseActionResources[] resources;
    public PostVolumesIdActionsResizeActionResponseAction withResources(PostVolumesIdActionsResizeActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostVolumesIdActionsResizeActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostVolumesIdActionsResizeActionResponseActionStatusEnum status;
    public PostVolumesIdActionsResizeActionResponseAction withStatus(PostVolumesIdActionsResizeActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}