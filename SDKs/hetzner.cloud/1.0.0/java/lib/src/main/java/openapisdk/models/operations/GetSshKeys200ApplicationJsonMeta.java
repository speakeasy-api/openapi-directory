package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSshKeys200ApplicationJsonMeta {
    @JsonProperty("pagination")
    public GetSshKeys200ApplicationJsonMetaPagination pagination;
    public GetSshKeys200ApplicationJsonMeta withPagination(GetSshKeys200ApplicationJsonMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
}