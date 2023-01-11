package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListBatchesResponseBodyPaginationLink
 * Helpful links to other pages of results
**/
public class ListBatchesResponseBodyPaginationLink {
    @JsonProperty("first")
    public Link first;
    public ListBatchesResponseBodyPaginationLink withFirst(Link first) {
        this.first = first;
        return this;
    }
    @JsonProperty("last")
    public Link last;
    public ListBatchesResponseBodyPaginationLink withLast(Link last) {
        this.last = last;
        return this;
    }
    @JsonProperty("next")
    public OptionalLink next;
    public ListBatchesResponseBodyPaginationLink withNext(OptionalLink next) {
        this.next = next;
        return this;
    }
    @JsonProperty("prev")
    public OptionalLink prev;
    public ListBatchesResponseBodyPaginationLink withPrev(OptionalLink prev) {
        this.prev = prev;
        return this;
    }
}