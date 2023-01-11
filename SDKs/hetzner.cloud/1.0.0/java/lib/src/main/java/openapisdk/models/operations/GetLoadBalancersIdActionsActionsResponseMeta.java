package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancersIdActionsActionsResponseMeta {
    @JsonProperty("pagination")
    public GetLoadBalancersIdActionsActionsResponseMetaPagination pagination;
    public GetLoadBalancersIdActionsActionsResponseMeta withPagination(GetLoadBalancersIdActionsActionsResponseMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
}