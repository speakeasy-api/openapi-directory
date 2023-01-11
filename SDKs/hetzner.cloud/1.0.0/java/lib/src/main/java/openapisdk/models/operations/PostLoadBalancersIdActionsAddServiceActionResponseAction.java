package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsAddServiceActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostLoadBalancersIdActionsAddServiceActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostLoadBalancersIdActionsAddServiceActionResponseActionError error;
    public PostLoadBalancersIdActionsAddServiceActionResponseAction withError(PostLoadBalancersIdActionsAddServiceActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostLoadBalancersIdActionsAddServiceActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancersIdActionsAddServiceActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostLoadBalancersIdActionsAddServiceActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostLoadBalancersIdActionsAddServiceActionResponseActionResources[] resources;
    public PostLoadBalancersIdActionsAddServiceActionResponseAction withResources(PostLoadBalancersIdActionsAddServiceActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostLoadBalancersIdActionsAddServiceActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostLoadBalancersIdActionsAddServiceActionResponseActionStatusEnum status;
    public PostLoadBalancersIdActionsAddServiceActionResponseAction withStatus(PostLoadBalancersIdActionsAddServiceActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}