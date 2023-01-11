package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PageLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first")
    public String first;
    public PageLinks withFirst(String first) {
        this.first = first;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last")
    public String last;
    public PageLinks withLast(String last) {
        this.last = last;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public PageLinks withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev")
    public String prev;
    public PageLinks withPrev(String prev) {
        this.prev = prev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("related")
    public String related;
    public PageLinks withRelated(String related) {
        this.related = related;
        return this;
    }
    @JsonProperty("self")
    public String self;
    public PageLinks withSelf(String self) {
        this.self = self;
        return this;
    }
}