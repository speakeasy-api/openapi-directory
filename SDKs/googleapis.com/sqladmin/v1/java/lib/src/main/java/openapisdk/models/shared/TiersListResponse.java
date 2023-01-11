package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TiersListResponse
 * Tiers list response.
**/
public class TiersListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Tier[] items;
    public TiersListResponse withItems(Tier[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public TiersListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}