package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCertificatesIdActionsActionsResponse {
    @JsonProperty("actions")
    public GetCertificatesIdActionsActionsResponseAction[] actions;
    public GetCertificatesIdActionsActionsResponse withActions(GetCertificatesIdActionsActionsResponseAction[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetCertificatesIdActionsActionsResponseMeta meta;
    public GetCertificatesIdActionsActionsResponse withMeta(GetCertificatesIdActionsActionsResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}