package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetVolumes200ApplicationJsonMeta {
    @JsonProperty("pagination")
    public GetVolumes200ApplicationJsonMetaPagination pagination;
    public GetVolumes200ApplicationJsonMeta withPagination(GetVolumes200ApplicationJsonMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
}