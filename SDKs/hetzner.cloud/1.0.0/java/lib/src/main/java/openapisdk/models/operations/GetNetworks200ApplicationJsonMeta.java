package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNetworks200ApplicationJsonMeta {
    @JsonProperty("pagination")
    public GetNetworks200ApplicationJsonMetaPagination pagination;
    public GetNetworks200ApplicationJsonMeta withPagination(GetNetworks200ApplicationJsonMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
}