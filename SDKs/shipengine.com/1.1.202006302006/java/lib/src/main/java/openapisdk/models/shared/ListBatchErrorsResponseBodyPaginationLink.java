package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListBatchErrorsResponseBodyPaginationLink
 * Helpful links to other pages of results
**/
public class ListBatchErrorsResponseBodyPaginationLink {
    @JsonProperty("first")
    public Link first;
    public ListBatchErrorsResponseBodyPaginationLink withFirst(Link first) {
        this.first = first;
        return this;
    }
    @JsonProperty("last")
    public Link last;
    public ListBatchErrorsResponseBodyPaginationLink withLast(Link last) {
        this.last = last;
        return this;
    }
    @JsonProperty("next")
    public OptionalLink next;
    public ListBatchErrorsResponseBodyPaginationLink withNext(OptionalLink next) {
        this.next = next;
        return this;
    }
    @JsonProperty("prev")
    public OptionalLink prev;
    public ListBatchErrorsResponseBodyPaginationLink withPrev(OptionalLink prev) {
        this.prev = prev;
        return this;
    }
}