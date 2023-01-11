package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsDisableBackupActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsDisableBackupActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsDisableBackupActionResponseActionError error;
    public PostServersIdActionsDisableBackupActionResponseAction withError(PostServersIdActionsDisableBackupActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsDisableBackupActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsDisableBackupActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsDisableBackupActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsDisableBackupActionResponseActionResources[] resources;
    public PostServersIdActionsDisableBackupActionResponseAction withResources(PostServersIdActionsDisableBackupActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsDisableBackupActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsDisableBackupActionResponseActionStatusEnum status;
    public PostServersIdActionsDisableBackupActionResponseAction withStatus(PostServersIdActionsDisableBackupActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}