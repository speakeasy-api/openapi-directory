package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError error;
    public PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction withError(PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionResources[] resources;
    public PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction withResources(PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionStatusEnum status;
    public PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction withStatus(PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}