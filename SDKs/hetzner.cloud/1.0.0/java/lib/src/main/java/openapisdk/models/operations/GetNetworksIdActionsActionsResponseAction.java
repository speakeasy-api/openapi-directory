package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNetworksIdActionsActionsResponseAction {
    @JsonProperty("command")
    public String command;
    public GetNetworksIdActionsActionsResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public GetNetworksIdActionsActionsResponseActionError error;
    public GetNetworksIdActionsActionsResponseAction withError(GetNetworksIdActionsActionsResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public GetNetworksIdActionsActionsResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetNetworksIdActionsActionsResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public GetNetworksIdActionsActionsResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public GetNetworksIdActionsActionsResponseActionResources[] resources;
    public GetNetworksIdActionsActionsResponseAction withResources(GetNetworksIdActionsActionsResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public GetNetworksIdActionsActionsResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public GetNetworksIdActionsActionsResponseActionStatusEnum status;
    public GetNetworksIdActionsActionsResponseAction withStatus(GetNetworksIdActionsActionsResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}