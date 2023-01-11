package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatabasesListResponse
 * Database list response.
**/
public class DatabasesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Database[] items;
    public DatabasesListResponse withItems(Database[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DatabasesListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}