package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsAttachIsoActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsAttachIsoActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsAttachIsoActionResponseActionError error;
    public PostServersIdActionsAttachIsoActionResponseAction withError(PostServersIdActionsAttachIsoActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsAttachIsoActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsAttachIsoActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsAttachIsoActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsAttachIsoActionResponseActionResources[] resources;
    public PostServersIdActionsAttachIsoActionResponseAction withResources(PostServersIdActionsAttachIsoActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsAttachIsoActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsAttachIsoActionResponseActionStatusEnum status;
    public PostServersIdActionsAttachIsoActionResponseAction withStatus(PostServersIdActionsAttachIsoActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}