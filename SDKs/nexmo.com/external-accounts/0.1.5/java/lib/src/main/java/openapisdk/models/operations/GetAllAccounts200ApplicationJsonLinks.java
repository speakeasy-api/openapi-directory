package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAllAccounts200ApplicationJsonLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first")
    public GetAllAccounts200ApplicationJsonLinksFirst first;
    public GetAllAccounts200ApplicationJsonLinks withFirst(GetAllAccounts200ApplicationJsonLinksFirst first) {
        this.first = first;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last")
    public GetAllAccounts200ApplicationJsonLinksLast last;
    public GetAllAccounts200ApplicationJsonLinks withLast(GetAllAccounts200ApplicationJsonLinksLast last) {
        this.last = last;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public GetAllAccounts200ApplicationJsonLinksNext next;
    public GetAllAccounts200ApplicationJsonLinks withNext(GetAllAccounts200ApplicationJsonLinksNext next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev")
    public GetAllAccounts200ApplicationJsonLinksPrev prev;
    public GetAllAccounts200ApplicationJsonLinks withPrev(GetAllAccounts200ApplicationJsonLinksPrev prev) {
        this.prev = prev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public GetAllAccounts200ApplicationJsonLinksSelf self;
    public GetAllAccounts200ApplicationJsonLinks withSelf(GetAllAccounts200ApplicationJsonLinksSelf self) {
        this.self = self;
        return this;
    }
}