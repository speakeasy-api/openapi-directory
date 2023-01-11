package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Bookshelves {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Bookshelf[] items;
    public Bookshelves withItems(Bookshelf[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Bookshelves withKind(String kind) {
        this.kind = kind;
        return this;
    }
}