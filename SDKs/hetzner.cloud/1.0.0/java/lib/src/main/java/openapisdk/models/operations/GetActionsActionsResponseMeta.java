package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetActionsActionsResponseMeta {
    @JsonProperty("pagination")
    public GetActionsActionsResponseMetaPagination pagination;
    public GetActionsActionsResponseMeta withPagination(GetActionsActionsResponseMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
}