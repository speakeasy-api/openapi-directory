package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCertificatesIdActionsActionsResponseAction {
    @JsonProperty("command")
    public String command;
    public GetCertificatesIdActionsActionsResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public GetCertificatesIdActionsActionsResponseActionError error;
    public GetCertificatesIdActionsActionsResponseAction withError(GetCertificatesIdActionsActionsResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public GetCertificatesIdActionsActionsResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetCertificatesIdActionsActionsResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public GetCertificatesIdActionsActionsResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public GetCertificatesIdActionsActionsResponseActionResources[] resources;
    public GetCertificatesIdActionsActionsResponseAction withResources(GetCertificatesIdActionsActionsResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public GetCertificatesIdActionsActionsResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public GetCertificatesIdActionsActionsResponseActionStatusEnum status;
    public GetCertificatesIdActionsActionsResponseAction withStatus(GetCertificatesIdActionsActionsResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}