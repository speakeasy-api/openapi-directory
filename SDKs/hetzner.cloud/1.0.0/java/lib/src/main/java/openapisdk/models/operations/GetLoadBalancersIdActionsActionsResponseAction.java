package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancersIdActionsActionsResponseAction {
    @JsonProperty("command")
    public String command;
    public GetLoadBalancersIdActionsActionsResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public GetLoadBalancersIdActionsActionsResponseActionError error;
    public GetLoadBalancersIdActionsActionsResponseAction withError(GetLoadBalancersIdActionsActionsResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public GetLoadBalancersIdActionsActionsResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetLoadBalancersIdActionsActionsResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public GetLoadBalancersIdActionsActionsResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public GetLoadBalancersIdActionsActionsResponseActionResources[] resources;
    public GetLoadBalancersIdActionsActionsResponseAction withResources(GetLoadBalancersIdActionsActionsResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public GetLoadBalancersIdActionsActionsResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public GetLoadBalancersIdActionsActionsResponseActionStatusEnum status;
    public GetLoadBalancersIdActionsActionsResponseAction withStatus(GetLoadBalancersIdActionsActionsResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}