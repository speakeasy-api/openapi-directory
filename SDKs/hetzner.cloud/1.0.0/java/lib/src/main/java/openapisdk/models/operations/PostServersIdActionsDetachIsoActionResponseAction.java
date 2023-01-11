package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsDetachIsoActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsDetachIsoActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsDetachIsoActionResponseActionError error;
    public PostServersIdActionsDetachIsoActionResponseAction withError(PostServersIdActionsDetachIsoActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsDetachIsoActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsDetachIsoActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsDetachIsoActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsDetachIsoActionResponseActionResources[] resources;
    public PostServersIdActionsDetachIsoActionResponseAction withResources(PostServersIdActionsDetachIsoActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsDetachIsoActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsDetachIsoActionResponseActionStatusEnum status;
    public PostServersIdActionsDetachIsoActionResponseAction withStatus(PostServersIdActionsDetachIsoActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}