package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntryInfoResponseToplevelLinks
 * A set of Links objects, possibly including pagination
**/
public class EntryInfoResponseToplevelLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first")
    public Object first;
    public EntryInfoResponseToplevelLinks withFirst(Object first) {
        this.first = first;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last")
    public Object last;
    public EntryInfoResponseToplevelLinks withLast(Object last) {
        this.last = last;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public Object next;
    public EntryInfoResponseToplevelLinks withNext(Object next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev")
    public Object prev;
    public EntryInfoResponseToplevelLinks withPrev(Object prev) {
        this.prev = prev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("related")
    public Object related;
    public EntryInfoResponseToplevelLinks withRelated(Object related) {
        this.related = related;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public Object self;
    public EntryInfoResponseToplevelLinks withSelf(Object self) {
        this.self = self;
        return this;
    }
}