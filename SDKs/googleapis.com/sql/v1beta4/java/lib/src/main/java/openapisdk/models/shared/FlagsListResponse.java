package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FlagsListResponse
 * Flags list response.
**/
public class FlagsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Flag[] items;
    public FlagsListResponse withItems(Flag[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public FlagsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}