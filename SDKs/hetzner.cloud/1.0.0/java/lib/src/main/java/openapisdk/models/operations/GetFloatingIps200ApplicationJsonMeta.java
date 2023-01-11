package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFloatingIps200ApplicationJsonMeta {
    @JsonProperty("pagination")
    public GetFloatingIps200ApplicationJsonMetaPagination pagination;
    public GetFloatingIps200ApplicationJsonMeta withPagination(GetFloatingIps200ApplicationJsonMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
}