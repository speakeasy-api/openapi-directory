package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListManifestsResponseBodyPaginationLink
 * Helpful links to other pages of results
**/
public class ListManifestsResponseBodyPaginationLink {
    @JsonProperty("first")
    public Link first;
    public ListManifestsResponseBodyPaginationLink withFirst(Link first) {
        this.first = first;
        return this;
    }
    @JsonProperty("last")
    public Link last;
    public ListManifestsResponseBodyPaginationLink withLast(Link last) {
        this.last = last;
        return this;
    }
    @JsonProperty("next")
    public OptionalLink next;
    public ListManifestsResponseBodyPaginationLink withNext(OptionalLink next) {
        this.next = next;
        return this;
    }
    @JsonProperty("prev")
    public OptionalLink prev;
    public ListManifestsResponseBodyPaginationLink withPrev(OptionalLink prev) {
        this.prev = prev;
        return this;
    }
}