package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFloatingIpsIdActions200ApplicationJsonAction {
    @JsonProperty("command")
    public String command;
    public GetFloatingIpsIdActions200ApplicationJsonAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public GetFloatingIpsIdActions200ApplicationJsonActionError error;
    public GetFloatingIpsIdActions200ApplicationJsonAction withError(GetFloatingIpsIdActions200ApplicationJsonActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public GetFloatingIpsIdActions200ApplicationJsonAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetFloatingIpsIdActions200ApplicationJsonAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public GetFloatingIpsIdActions200ApplicationJsonAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public GetFloatingIpsIdActions200ApplicationJsonActionResources[] resources;
    public GetFloatingIpsIdActions200ApplicationJsonAction withResources(GetFloatingIpsIdActions200ApplicationJsonActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public GetFloatingIpsIdActions200ApplicationJsonAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public GetFloatingIpsIdActions200ApplicationJsonActionStatusEnum status;
    public GetFloatingIpsIdActions200ApplicationJsonAction withStatus(GetFloatingIpsIdActions200ApplicationJsonActionStatusEnum status) {
        this.status = status;
        return this;
    }
}