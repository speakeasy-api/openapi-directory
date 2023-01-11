package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCertificatesIdActionsActionIdActionResponseAction {
    @JsonProperty("command")
    public String command;
    public GetCertificatesIdActionsActionIdActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public GetCertificatesIdActionsActionIdActionResponseActionError error;
    public GetCertificatesIdActionsActionIdActionResponseAction withError(GetCertificatesIdActionsActionIdActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public GetCertificatesIdActionsActionIdActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetCertificatesIdActionsActionIdActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public GetCertificatesIdActionsActionIdActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public GetCertificatesIdActionsActionIdActionResponseActionResources[] resources;
    public GetCertificatesIdActionsActionIdActionResponseAction withResources(GetCertificatesIdActionsActionIdActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public GetCertificatesIdActionsActionIdActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public GetCertificatesIdActionsActionIdActionResponseActionStatusEnum status;
    public GetCertificatesIdActionsActionIdActionResponseAction withStatus(GetCertificatesIdActionsActionIdActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}