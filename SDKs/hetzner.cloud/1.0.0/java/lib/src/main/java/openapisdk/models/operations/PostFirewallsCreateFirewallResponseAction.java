package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFirewallsCreateFirewallResponseAction {
    @JsonProperty("command")
    public String command;
    public PostFirewallsCreateFirewallResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostFirewallsCreateFirewallResponseActionError error;
    public PostFirewallsCreateFirewallResponseAction withError(PostFirewallsCreateFirewallResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostFirewallsCreateFirewallResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostFirewallsCreateFirewallResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostFirewallsCreateFirewallResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostFirewallsCreateFirewallResponseActionResources[] resources;
    public PostFirewallsCreateFirewallResponseAction withResources(PostFirewallsCreateFirewallResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostFirewallsCreateFirewallResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostFirewallsCreateFirewallResponseActionStatusEnum status;
    public PostFirewallsCreateFirewallResponseAction withStatus(PostFirewallsCreateFirewallResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}