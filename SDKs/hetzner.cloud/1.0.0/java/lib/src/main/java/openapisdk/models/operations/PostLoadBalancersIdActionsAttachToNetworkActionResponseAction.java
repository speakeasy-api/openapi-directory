package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsAttachToNetworkActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostLoadBalancersIdActionsAttachToNetworkActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError error;
    public PostLoadBalancersIdActionsAttachToNetworkActionResponseAction withError(PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostLoadBalancersIdActionsAttachToNetworkActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancersIdActionsAttachToNetworkActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostLoadBalancersIdActionsAttachToNetworkActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostLoadBalancersIdActionsAttachToNetworkActionResponseActionResources[] resources;
    public PostLoadBalancersIdActionsAttachToNetworkActionResponseAction withResources(PostLoadBalancersIdActionsAttachToNetworkActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostLoadBalancersIdActionsAttachToNetworkActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostLoadBalancersIdActionsAttachToNetworkActionResponseActionStatusEnum status;
    public PostLoadBalancersIdActionsAttachToNetworkActionResponseAction withStatus(PostLoadBalancersIdActionsAttachToNetworkActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}