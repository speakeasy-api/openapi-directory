package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServers200ApplicationJsonMeta {
    @JsonProperty("pagination")
    public GetServers200ApplicationJsonMetaPagination pagination;
    public GetServers200ApplicationJsonMeta withPagination(GetServers200ApplicationJsonMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
}