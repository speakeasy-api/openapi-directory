package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNetworksIdActionsActionsResponseMeta {
    @JsonProperty("pagination")
    public GetNetworksIdActionsActionsResponseMetaPagination pagination;
    public GetNetworksIdActionsActionsResponseMeta withPagination(GetNetworksIdActionsActionsResponseMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
}