package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StructureResponseManyToplevelLinks
 * A set of Links objects, possibly including pagination
**/
public class StructureResponseManyToplevelLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first")
    public Object first;
    public StructureResponseManyToplevelLinks withFirst(Object first) {
        this.first = first;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last")
    public Object last;
    public StructureResponseManyToplevelLinks withLast(Object last) {
        this.last = last;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public Object next;
    public StructureResponseManyToplevelLinks withNext(Object next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev")
    public Object prev;
    public StructureResponseManyToplevelLinks withPrev(Object prev) {
        this.prev = prev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("related")
    public Object related;
    public StructureResponseManyToplevelLinks withRelated(Object related) {
        this.related = related;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public Object self;
    public StructureResponseManyToplevelLinks withSelf(Object self) {
        this.self = self;
        return this;
    }
}