package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetIsos200ApplicationJsonMeta {
    @JsonProperty("pagination")
    public GetIsos200ApplicationJsonMetaPagination pagination;
    public GetIsos200ApplicationJsonMeta withPagination(GetIsos200ApplicationJsonMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
}