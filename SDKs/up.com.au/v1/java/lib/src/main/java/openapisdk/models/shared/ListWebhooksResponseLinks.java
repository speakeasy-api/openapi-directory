package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListWebhooksResponseLinks {
    @JsonProperty("next")
    public String next;
    public ListWebhooksResponseLinks withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonProperty("prev")
    public String prev;
    public ListWebhooksResponseLinks withPrev(String prev) {
        this.prev = prev;
        return this;
    }
}