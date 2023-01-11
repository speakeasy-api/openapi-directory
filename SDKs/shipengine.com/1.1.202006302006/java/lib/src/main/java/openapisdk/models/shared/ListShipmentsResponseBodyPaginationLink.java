package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListShipmentsResponseBodyPaginationLink
 * Helpful links to other pages of results
**/
public class ListShipmentsResponseBodyPaginationLink {
    @JsonProperty("first")
    public Link first;
    public ListShipmentsResponseBodyPaginationLink withFirst(Link first) {
        this.first = first;
        return this;
    }
    @JsonProperty("last")
    public Link last;
    public ListShipmentsResponseBodyPaginationLink withLast(Link last) {
        this.last = last;
        return this;
    }
    @JsonProperty("next")
    public OptionalLink next;
    public ListShipmentsResponseBodyPaginationLink withNext(OptionalLink next) {
        this.next = next;
        return this;
    }
    @JsonProperty("prev")
    public OptionalLink prev;
    public ListShipmentsResponseBodyPaginationLink withPrev(OptionalLink prev) {
        this.prev = prev;
        return this;
    }
}