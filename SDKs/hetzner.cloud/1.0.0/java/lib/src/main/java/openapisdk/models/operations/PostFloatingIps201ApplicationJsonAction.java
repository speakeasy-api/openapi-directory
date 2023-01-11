package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFloatingIps201ApplicationJsonAction {
    @JsonProperty("command")
    public String command;
    public PostFloatingIps201ApplicationJsonAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostFloatingIps201ApplicationJsonActionError error;
    public PostFloatingIps201ApplicationJsonAction withError(PostFloatingIps201ApplicationJsonActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostFloatingIps201ApplicationJsonAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostFloatingIps201ApplicationJsonAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostFloatingIps201ApplicationJsonAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostFloatingIps201ApplicationJsonActionResources[] resources;
    public PostFloatingIps201ApplicationJsonAction withResources(PostFloatingIps201ApplicationJsonActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostFloatingIps201ApplicationJsonAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostFloatingIps201ApplicationJsonActionStatusEnum status;
    public PostFloatingIps201ApplicationJsonAction withStatus(PostFloatingIps201ApplicationJsonActionStatusEnum status) {
        this.status = status;
        return this;
    }
}