package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PaginatedLocationResult {
    @JsonProperty("meta")
    public PaginatedLocationResultMeta meta;
    public PaginatedLocationResult withMeta(PaginatedLocationResultMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("response")
    public LocationResult[] response;
    public PaginatedLocationResult withResponse(LocationResult[] response) {
        this.response = response;
        return this;
    }
}