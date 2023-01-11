package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InfoResponseToplevelLinks
 * A set of Links objects, possibly including pagination
**/
public class InfoResponseToplevelLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first")
    public Object first;
    public InfoResponseToplevelLinks withFirst(Object first) {
        this.first = first;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last")
    public Object last;
    public InfoResponseToplevelLinks withLast(Object last) {
        this.last = last;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public Object next;
    public InfoResponseToplevelLinks withNext(Object next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev")
    public Object prev;
    public InfoResponseToplevelLinks withPrev(Object prev) {
        this.prev = prev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("related")
    public Object related;
    public InfoResponseToplevelLinks withRelated(Object related) {
        this.related = related;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public Object self;
    public InfoResponseToplevelLinks withSelf(Object self) {
        this.self = self;
        return this;
    }
}