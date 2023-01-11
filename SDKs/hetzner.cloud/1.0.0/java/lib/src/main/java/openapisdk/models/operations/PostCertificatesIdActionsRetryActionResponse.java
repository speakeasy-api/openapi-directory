package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostCertificatesIdActionsRetryActionResponse {
    @JsonProperty("action")
    public PostCertificatesIdActionsRetryActionResponseAction action;
    public PostCertificatesIdActionsRetryActionResponse withAction(PostCertificatesIdActionsRetryActionResponseAction action) {
        this.action = action;
        return this;
    }
}