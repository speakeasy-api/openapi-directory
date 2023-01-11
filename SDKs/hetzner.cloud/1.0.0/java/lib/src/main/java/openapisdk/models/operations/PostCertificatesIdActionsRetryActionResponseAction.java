package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostCertificatesIdActionsRetryActionResponseAction {
    @JsonProperty("command")
    public String command;
    public PostCertificatesIdActionsRetryActionResponseAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostCertificatesIdActionsRetryActionResponseActionError error;
    public PostCertificatesIdActionsRetryActionResponseAction withError(PostCertificatesIdActionsRetryActionResponseActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostCertificatesIdActionsRetryActionResponseAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostCertificatesIdActionsRetryActionResponseAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostCertificatesIdActionsRetryActionResponseAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostCertificatesIdActionsRetryActionResponseActionResources[] resources;
    public PostCertificatesIdActionsRetryActionResponseAction withResources(PostCertificatesIdActionsRetryActionResponseActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostCertificatesIdActionsRetryActionResponseAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostCertificatesIdActionsRetryActionResponseActionStatusEnum status;
    public PostCertificatesIdActionsRetryActionResponseAction withStatus(PostCertificatesIdActionsRetryActionResponseActionStatusEnum status) {
        this.status = status;
        return this;
    }
}