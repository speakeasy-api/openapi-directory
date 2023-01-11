package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsChangeTypeActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostLoadBalancersIdActionsChangeTypeActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostLoadBalancersIdActionsChangeTypeActionResponseActionError error;
    public PostLoadBalancersIdActionsChangeTypeActionResponseAction withError(PostLoadBalancersIdActionsChangeTypeActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostLoadBalancersIdActionsChangeTypeActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancersIdActionsChangeTypeActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostLoadBalancersIdActionsChangeTypeActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostLoadBalancersIdActionsChangeTypeActionResponseActionResources[] resources;
    public PostLoadBalancersIdActionsChangeTypeActionResponseAction withResources(PostLoadBalancersIdActionsChangeTypeActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostLoadBalancersIdActionsChangeTypeActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostLoadBalancersIdActionsChangeTypeActionResponseActionStatusEnum status;
    public PostLoadBalancersIdActionsChangeTypeActionResponseAction withStatus(PostLoadBalancersIdActionsChangeTypeActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}