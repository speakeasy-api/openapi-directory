package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Category {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public CategoryItems[] items;
    public Category withItems(CategoryItems[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Category withKind(String kind) {
        this.kind = kind;
        return this;
    }
}