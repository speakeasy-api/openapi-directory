package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersCreateServerResponseAction {
    @JsonProperty("command")
    public String command;
    public PostServersCreateServerResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersCreateServerResponseActionError error;
    public PostServersCreateServerResponseAction withError(PostServersCreateServerResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersCreateServerResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersCreateServerResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersCreateServerResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersCreateServerResponseActionResources[] resources;
    public PostServersCreateServerResponseAction withResources(PostServersCreateServerResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersCreateServerResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersCreateServerResponseActionStatusEnum status;
    public PostServersCreateServerResponseAction withStatus(PostServersCreateServerResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}