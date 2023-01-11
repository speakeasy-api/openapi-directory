package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServersIdActionsActionsResponseMeta {
    @JsonProperty("pagination")
    public GetServersIdActionsActionsResponseMetaPagination pagination;
    public GetServersIdActionsActionsResponseMeta withPagination(GetServersIdActionsActionsResponseMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
}