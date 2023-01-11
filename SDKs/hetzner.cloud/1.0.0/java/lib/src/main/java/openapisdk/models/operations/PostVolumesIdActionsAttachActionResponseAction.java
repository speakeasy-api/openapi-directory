package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostVolumesIdActionsAttachActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostVolumesIdActionsAttachActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostVolumesIdActionsAttachActionResponseActionError error;
    public PostVolumesIdActionsAttachActionResponseAction withError(PostVolumesIdActionsAttachActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostVolumesIdActionsAttachActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostVolumesIdActionsAttachActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostVolumesIdActionsAttachActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostVolumesIdActionsAttachActionResponseActionResources[] resources;
    public PostVolumesIdActionsAttachActionResponseAction withResources(PostVolumesIdActionsAttachActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostVolumesIdActionsAttachActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostVolumesIdActionsAttachActionResponseActionStatusEnum status;
    public PostVolumesIdActionsAttachActionResponseAction withStatus(PostVolumesIdActionsAttachActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}