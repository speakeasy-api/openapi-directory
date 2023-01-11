package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListShipmentErrorsResponseBodyPaginationLink
 * Helpful links to other pages of results
**/
public class ListShipmentErrorsResponseBodyPaginationLink {
    @JsonProperty("first")
    public Link first;
    public ListShipmentErrorsResponseBodyPaginationLink withFirst(Link first) {
        this.first = first;
        return this;
    }
    @JsonProperty("last")
    public Link last;
    public ListShipmentErrorsResponseBodyPaginationLink withLast(Link last) {
        this.last = last;
        return this;
    }
    @JsonProperty("next")
    public OptionalLink next;
    public ListShipmentErrorsResponseBodyPaginationLink withNext(OptionalLink next) {
        this.next = next;
        return this;
    }
    @JsonProperty("prev")
    public OptionalLink prev;
    public ListShipmentErrorsResponseBodyPaginationLink withPrev(OptionalLink prev) {
        this.prev = prev;
        return this;
    }
}