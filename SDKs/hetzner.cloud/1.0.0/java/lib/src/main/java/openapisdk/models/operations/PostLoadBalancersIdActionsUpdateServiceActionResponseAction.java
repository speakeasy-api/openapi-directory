package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsUpdateServiceActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostLoadBalancersIdActionsUpdateServiceActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostLoadBalancersIdActionsUpdateServiceActionResponseActionError error;
    public PostLoadBalancersIdActionsUpdateServiceActionResponseAction withError(PostLoadBalancersIdActionsUpdateServiceActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostLoadBalancersIdActionsUpdateServiceActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancersIdActionsUpdateServiceActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostLoadBalancersIdActionsUpdateServiceActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources[] resources;
    public PostLoadBalancersIdActionsUpdateServiceActionResponseAction withResources(PostLoadBalancersIdActionsUpdateServiceActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostLoadBalancersIdActionsUpdateServiceActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostLoadBalancersIdActionsUpdateServiceActionResponseActionStatusEnum status;
    public PostLoadBalancersIdActionsUpdateServiceActionResponseAction withStatus(PostLoadBalancersIdActionsUpdateServiceActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}