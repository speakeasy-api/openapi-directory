package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAndSearchMediaItems200ApplicationJsonLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first")
    public ListAndSearchMediaItems200ApplicationJsonLinksFirst first;
    public ListAndSearchMediaItems200ApplicationJsonLinks withFirst(ListAndSearchMediaItems200ApplicationJsonLinksFirst first) {
        this.first = first;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last")
    public ListAndSearchMediaItems200ApplicationJsonLinksLast last;
    public ListAndSearchMediaItems200ApplicationJsonLinks withLast(ListAndSearchMediaItems200ApplicationJsonLinksLast last) {
        this.last = last;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public ListAndSearchMediaItems200ApplicationJsonLinksSelf self;
    public ListAndSearchMediaItems200ApplicationJsonLinks withSelf(ListAndSearchMediaItems200ApplicationJsonLinksSelf self) {
        this.self = self;
        return this;
    }
}