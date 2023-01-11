package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancers200ApplicationJsonMeta {
    @JsonProperty("pagination")
    public GetLoadBalancers200ApplicationJsonMetaPagination pagination;
    public GetLoadBalancers200ApplicationJsonMeta withPagination(GetLoadBalancers200ApplicationJsonMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
}