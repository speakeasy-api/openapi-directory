package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetActionsActionsResponseAction {
    @JsonProperty("command")
    public String command;
    public GetActionsActionsResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public GetActionsActionsResponseActionError error;
    public GetActionsActionsResponseAction withError(GetActionsActionsResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public GetActionsActionsResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetActionsActionsResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public GetActionsActionsResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public GetActionsActionsResponseActionResources[] resources;
    public GetActionsActionsResponseAction withResources(GetActionsActionsResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public GetActionsActionsResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public GetActionsActionsResponseActionStatusEnum status;
    public GetActionsActionsResponseAction withStatus(GetActionsActionsResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}