package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCertificatesIdActionsActionIdActionResponse {
    @JsonProperty("action")
    public GetCertificatesIdActionsActionIdActionResponseAction action;
    public GetCertificatesIdActionsActionIdActionResponse withAction(GetCertificatesIdActionsActionIdActionResponseAction action) {
        this.action = action;
        return this;
    }
}