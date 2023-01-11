package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Layersummaries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Layersummary[] items;
    public Layersummaries withItems(Layersummary[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Layersummaries withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalItems")
    public Integer totalItems;
    public Layersummaries withTotalItems(Integer totalItems) {
        this.totalItems = totalItems;
        return this;
    }
}