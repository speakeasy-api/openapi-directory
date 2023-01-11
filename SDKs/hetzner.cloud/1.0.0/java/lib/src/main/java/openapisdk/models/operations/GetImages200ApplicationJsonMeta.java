package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetImages200ApplicationJsonMeta {
    @JsonProperty("pagination")
    public GetImages200ApplicationJsonMetaPagination pagination;
    public GetImages200ApplicationJsonMeta withPagination(GetImages200ApplicationJsonMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
}