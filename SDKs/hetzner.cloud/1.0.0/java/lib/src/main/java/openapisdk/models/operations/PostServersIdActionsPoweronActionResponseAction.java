package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsPoweronActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsPoweronActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsPoweronActionResponseActionError error;
    public PostServersIdActionsPoweronActionResponseAction withError(PostServersIdActionsPoweronActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsPoweronActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsPoweronActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsPoweronActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsPoweronActionResponseActionResources[] resources;
    public PostServersIdActionsPoweronActionResponseAction withResources(PostServersIdActionsPoweronActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsPoweronActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsPoweronActionResponseActionStatusEnum status;
    public PostServersIdActionsPoweronActionResponseAction withStatus(PostServersIdActionsPoweronActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}