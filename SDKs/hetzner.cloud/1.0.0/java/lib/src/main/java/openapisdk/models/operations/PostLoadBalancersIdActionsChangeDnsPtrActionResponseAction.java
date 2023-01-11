package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError error;
    public PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction withError(PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources[] resources;
    public PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction withResources(PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionStatusEnum status;
    public PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction withStatus(PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}