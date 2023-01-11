package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsEnableBackupActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsEnableBackupActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsEnableBackupActionResponseActionError error;
    public PostServersIdActionsEnableBackupActionResponseAction withError(PostServersIdActionsEnableBackupActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsEnableBackupActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsEnableBackupActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsEnableBackupActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsEnableBackupActionResponseActionResources[] resources;
    public PostServersIdActionsEnableBackupActionResponseAction withResources(PostServersIdActionsEnableBackupActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsEnableBackupActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsEnableBackupActionResponseActionStatusEnum status;
    public PostServersIdActionsEnableBackupActionResponseAction withStatus(PostServersIdActionsEnableBackupActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}