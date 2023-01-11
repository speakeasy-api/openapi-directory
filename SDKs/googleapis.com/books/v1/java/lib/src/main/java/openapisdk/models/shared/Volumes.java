package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Volumes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Volume[] items;
    public Volumes withItems(Volume[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Volumes withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalItems")
    public Integer totalItems;
    public Volumes withTotalItems(Integer totalItems) {
        this.totalItems = totalItems;
        return this;
    }
}