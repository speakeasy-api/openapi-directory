package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostVolumes201ApplicationJsonAction {
    @JsonProperty("command")
    public String command;
    public PostVolumes201ApplicationJsonAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostVolumes201ApplicationJsonActionError error;
    public PostVolumes201ApplicationJsonAction withError(PostVolumes201ApplicationJsonActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostVolumes201ApplicationJsonAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostVolumes201ApplicationJsonAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostVolumes201ApplicationJsonAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostVolumes201ApplicationJsonActionResources[] resources;
    public PostVolumes201ApplicationJsonAction withResources(PostVolumes201ApplicationJsonActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostVolumes201ApplicationJsonAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostVolumes201ApplicationJsonActionStatusEnum status;
    public PostVolumes201ApplicationJsonAction withStatus(PostVolumes201ApplicationJsonActionStatusEnum status) {
        this.status = status;
        return this;
    }
}