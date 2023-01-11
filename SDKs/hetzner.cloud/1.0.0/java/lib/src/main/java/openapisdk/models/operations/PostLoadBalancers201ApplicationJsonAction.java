package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancers201ApplicationJsonAction {
    @JsonProperty("command")
    public String command;
    public PostLoadBalancers201ApplicationJsonAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostLoadBalancers201ApplicationJsonActionError error;
    public PostLoadBalancers201ApplicationJsonAction withError(PostLoadBalancers201ApplicationJsonActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostLoadBalancers201ApplicationJsonAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostLoadBalancers201ApplicationJsonAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostLoadBalancers201ApplicationJsonAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostLoadBalancers201ApplicationJsonActionResources[] resources;
    public PostLoadBalancers201ApplicationJsonAction withResources(PostLoadBalancers201ApplicationJsonActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostLoadBalancers201ApplicationJsonAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostLoadBalancers201ApplicationJsonActionStatusEnum status;
    public PostLoadBalancers201ApplicationJsonAction withStatus(PostLoadBalancers201ApplicationJsonActionStatusEnum status) {
        this.status = status;
        return this;
    }
}