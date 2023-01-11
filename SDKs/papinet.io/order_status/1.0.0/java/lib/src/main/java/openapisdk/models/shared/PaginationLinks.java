package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PaginationLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first")
    public PaginationLinksFirst first;
    public PaginationLinks withFirst(PaginationLinksFirst first) {
        this.first = first;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last")
    public PaginationLinksLast last;
    public PaginationLinks withLast(PaginationLinksLast last) {
        this.last = last;
        return this;
    }
    @JsonProperty("next")
    public PaginationLinksNext next;
    public PaginationLinks withNext(PaginationLinksNext next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev")
    public PaginationLinksPrev prev;
    public PaginationLinks withPrev(PaginationLinksPrev prev) {
        this.prev = prev;
        return this;
    }
}