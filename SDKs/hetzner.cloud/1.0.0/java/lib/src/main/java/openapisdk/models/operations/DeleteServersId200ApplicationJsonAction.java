package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteServersId200ApplicationJsonAction {
    @JsonProperty("command")
    public String command;
    public DeleteServersId200ApplicationJsonAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public DeleteServersId200ApplicationJsonActionError error;
    public DeleteServersId200ApplicationJsonAction withError(DeleteServersId200ApplicationJsonActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public DeleteServersId200ApplicationJsonAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public DeleteServersId200ApplicationJsonAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public DeleteServersId200ApplicationJsonAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public DeleteServersId200ApplicationJsonActionResources[] resources;
    public DeleteServersId200ApplicationJsonAction withResources(DeleteServersId200ApplicationJsonActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public DeleteServersId200ApplicationJsonAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public DeleteServersId200ApplicationJsonActionStatusEnum status;
    public DeleteServersId200ApplicationJsonAction withStatus(DeleteServersId200ApplicationJsonActionStatusEnum status) {
        this.status = status;
        return this;
    }
}