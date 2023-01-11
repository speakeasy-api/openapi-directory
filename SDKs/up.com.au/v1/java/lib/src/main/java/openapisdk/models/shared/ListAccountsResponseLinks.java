package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListAccountsResponseLinks {
    @JsonProperty("next")
    public String next;
    public ListAccountsResponseLinks withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonProperty("prev")
    public String prev;
    public ListAccountsResponseLinks withPrev(String prev) {
        this.prev = prev;
        return this;
    }
}