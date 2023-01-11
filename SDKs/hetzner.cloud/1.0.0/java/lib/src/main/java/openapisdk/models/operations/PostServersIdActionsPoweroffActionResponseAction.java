package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsPoweroffActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsPoweroffActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsPoweroffActionResponseActionError error;
    public PostServersIdActionsPoweroffActionResponseAction withError(PostServersIdActionsPoweroffActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsPoweroffActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsPoweroffActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsPoweroffActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsPoweroffActionResponseActionResources[] resources;
    public PostServersIdActionsPoweroffActionResponseAction withResources(PostServersIdActionsPoweroffActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsPoweroffActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsPoweroffActionResponseActionStatusEnum status;
    public PostServersIdActionsPoweroffActionResponseAction withStatus(PostServersIdActionsPoweroffActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}