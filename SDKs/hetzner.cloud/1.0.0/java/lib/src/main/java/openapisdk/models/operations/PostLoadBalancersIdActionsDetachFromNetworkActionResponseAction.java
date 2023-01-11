package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError error;
    public PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction withError(PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionResources[] resources;
    public PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction withResources(PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionStatusEnum status;
    public PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction withStatus(PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}