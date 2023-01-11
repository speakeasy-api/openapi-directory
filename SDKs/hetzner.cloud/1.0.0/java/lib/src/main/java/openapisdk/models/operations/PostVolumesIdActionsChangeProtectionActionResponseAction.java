package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostVolumesIdActionsChangeProtectionActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostVolumesIdActionsChangeProtectionActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostVolumesIdActionsChangeProtectionActionResponseActionError error;
    public PostVolumesIdActionsChangeProtectionActionResponseAction withError(PostVolumesIdActionsChangeProtectionActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostVolumesIdActionsChangeProtectionActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostVolumesIdActionsChangeProtectionActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostVolumesIdActionsChangeProtectionActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostVolumesIdActionsChangeProtectionActionResponseActionResources[] resources;
    public PostVolumesIdActionsChangeProtectionActionResponseAction withResources(PostVolumesIdActionsChangeProtectionActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostVolumesIdActionsChangeProtectionActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostVolumesIdActionsChangeProtectionActionResponseActionStatusEnum status;
    public PostVolumesIdActionsChangeProtectionActionResponseAction withStatus(PostVolumesIdActionsChangeProtectionActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}