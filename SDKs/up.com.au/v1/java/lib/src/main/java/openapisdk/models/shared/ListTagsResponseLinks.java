package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTagsResponseLinks {
    @JsonProperty("next")
    public String next;
    public ListTagsResponseLinks withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonProperty("prev")
    public String prev;
    public ListTagsResponseLinks withPrev(String prev) {
        this.prev = prev;
        return this;
    }
}