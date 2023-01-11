package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServersIdActionsActionsResponseAction {
    @JsonProperty("command")
    public String command;
    public GetServersIdActionsActionsResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public GetServersIdActionsActionsResponseActionError error;
    public GetServersIdActionsActionsResponseAction withError(GetServersIdActionsActionsResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public GetServersIdActionsActionsResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetServersIdActionsActionsResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public GetServersIdActionsActionsResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public GetServersIdActionsActionsResponseActionResources[] resources;
    public GetServersIdActionsActionsResponseAction withResources(GetServersIdActionsActionsResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public GetServersIdActionsActionsResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public GetServersIdActionsActionsResponseActionStatusEnum status;
    public GetServersIdActionsActionsResponseAction withStatus(GetServersIdActionsActionsResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}