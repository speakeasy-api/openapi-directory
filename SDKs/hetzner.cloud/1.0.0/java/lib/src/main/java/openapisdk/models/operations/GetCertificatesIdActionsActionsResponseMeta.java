package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCertificatesIdActionsActionsResponseMeta {
    @JsonProperty("pagination")
    public GetCertificatesIdActionsActionsResponseMetaPagination pagination;
    public GetCertificatesIdActionsActionsResponseMeta withPagination(GetCertificatesIdActionsActionsResponseMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
}