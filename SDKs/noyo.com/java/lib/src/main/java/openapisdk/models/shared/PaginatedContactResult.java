package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PaginatedContactResult {
    @JsonProperty("meta")
    public PaginatedContactResultMeta meta;
    public PaginatedContactResult withMeta(PaginatedContactResultMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("response")
    public ContactResult[] response;
    public PaginatedContactResult withResponse(ContactResult[] response) {
        this.response = response;
        return this;
    }
}