package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTransactionsResponseLinks {
    @JsonProperty("next")
    public String next;
    public ListTransactionsResponseLinks withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonProperty("prev")
    public String prev;
    public ListTransactionsResponseLinks withPrev(String prev) {
        this.prev = prev;
        return this;
    }
}