package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostCertificatesCreateCertificateResponseNullableAction {
    @JsonProperty("command")
    public String command;
    public PostCertificatesCreateCertificateResponseNullableAction withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonProperty("error")
    public PostCertificatesCreateCertificateResponseNullableActionError error;
    public PostCertificatesCreateCertificateResponseNullableAction withError(PostCertificatesCreateCertificateResponseNullableActionError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("finished")
    public String finished;
    public PostCertificatesCreateCertificateResponseNullableAction withFinished(String finished) {
        this.finished = finished;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostCertificatesCreateCertificateResponseNullableAction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public PostCertificatesCreateCertificateResponseNullableAction withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("resources")
    public PostCertificatesCreateCertificateResponseNullableActionResources[] resources;
    public PostCertificatesCreateCertificateResponseNullableAction withResources(PostCertificatesCreateCertificateResponseNullableActionResources[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonProperty("started")
    public String started;
    public PostCertificatesCreateCertificateResponseNullableAction withStarted(String started) {
        this.started = started;
        return this;
    }
    @JsonProperty("status")
    public PostCertificatesCreateCertificateResponseNullableActionStatusEnum status;
    public PostCertificatesCreateCertificateResponseNullableAction withStatus(PostCertificatesCreateCertificateResponseNullableActionStatusEnum status) {
        this.status = status;
        return this;
    }
}