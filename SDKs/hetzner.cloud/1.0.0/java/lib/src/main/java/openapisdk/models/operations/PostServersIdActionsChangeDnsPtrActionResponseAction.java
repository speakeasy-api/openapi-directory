package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsChangeDnsPtrActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsChangeDnsPtrActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsChangeDnsPtrActionResponseActionError error;
    public PostServersIdActionsChangeDnsPtrActionResponseAction withError(PostServersIdActionsChangeDnsPtrActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsChangeDnsPtrActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsChangeDnsPtrActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsChangeDnsPtrActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsChangeDnsPtrActionResponseActionResources[] resources;
    public PostServersIdActionsChangeDnsPtrActionResponseAction withResources(PostServersIdActionsChangeDnsPtrActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsChangeDnsPtrActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsChangeDnsPtrActionResponseActionStatusEnum status;
    public PostServersIdActionsChangeDnsPtrActionResponseAction withStatus(PostServersIdActionsChangeDnsPtrActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}