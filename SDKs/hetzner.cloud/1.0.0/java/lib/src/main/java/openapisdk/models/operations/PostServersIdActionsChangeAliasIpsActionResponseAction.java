package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsChangeAliasIpsActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostServersIdActionsChangeAliasIpsActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostServersIdActionsChangeAliasIpsActionResponseActionError error;
    public PostServersIdActionsChangeAliasIpsActionResponseAction withError(PostServersIdActionsChangeAliasIpsActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostServersIdActionsChangeAliasIpsActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsChangeAliasIpsActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostServersIdActionsChangeAliasIpsActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostServersIdActionsChangeAliasIpsActionResponseActionResources[] resources;
    public PostServersIdActionsChangeAliasIpsActionResponseAction withResources(PostServersIdActionsChangeAliasIpsActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostServersIdActionsChangeAliasIpsActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostServersIdActionsChangeAliasIpsActionResponseActionStatusEnum status;
    public PostServersIdActionsChangeAliasIpsActionResponseAction withStatus(PostServersIdActionsChangeAliasIpsActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}