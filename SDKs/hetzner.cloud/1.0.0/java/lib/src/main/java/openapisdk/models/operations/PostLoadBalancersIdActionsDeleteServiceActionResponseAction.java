package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsDeleteServiceActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostLoadBalancersIdActionsDeleteServiceActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostLoadBalancersIdActionsDeleteServiceActionResponseActionError error;
    public PostLoadBalancersIdActionsDeleteServiceActionResponseAction withError(PostLoadBalancersIdActionsDeleteServiceActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostLoadBalancersIdActionsDeleteServiceActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancersIdActionsDeleteServiceActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostLoadBalancersIdActionsDeleteServiceActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources[] resources;
    public PostLoadBalancersIdActionsDeleteServiceActionResponseAction withResources(PostLoadBalancersIdActionsDeleteServiceActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostLoadBalancersIdActionsDeleteServiceActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostLoadBalancersIdActionsDeleteServiceActionResponseActionStatusEnum status;
    public PostLoadBalancersIdActionsDeleteServiceActionResponseAction withStatus(PostLoadBalancersIdActionsDeleteServiceActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}