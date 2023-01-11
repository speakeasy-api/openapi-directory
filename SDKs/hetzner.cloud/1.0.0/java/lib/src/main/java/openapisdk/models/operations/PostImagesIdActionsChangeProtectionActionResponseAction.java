package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostImagesIdActionsChangeProtectionActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostImagesIdActionsChangeProtectionActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostImagesIdActionsChangeProtectionActionResponseActionError error;
    public PostImagesIdActionsChangeProtectionActionResponseAction withError(PostImagesIdActionsChangeProtectionActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostImagesIdActionsChangeProtectionActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostImagesIdActionsChangeProtectionActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostImagesIdActionsChangeProtectionActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostImagesIdActionsChangeProtectionActionResponseActionResources[] resources;
    public PostImagesIdActionsChangeProtectionActionResponseAction withResources(PostImagesIdActionsChangeProtectionActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostImagesIdActionsChangeProtectionActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostImagesIdActionsChangeProtectionActionResponseActionStatusEnum status;
    public PostImagesIdActionsChangeProtectionActionResponseAction withStatus(PostImagesIdActionsChangeProtectionActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}