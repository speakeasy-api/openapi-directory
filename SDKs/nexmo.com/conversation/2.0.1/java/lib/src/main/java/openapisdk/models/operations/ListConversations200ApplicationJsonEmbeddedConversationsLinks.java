package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConversations200ApplicationJsonEmbeddedConversationsLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public ListConversations200ApplicationJsonEmbeddedConversationsLinksSelf self;
    public ListConversations200ApplicationJsonEmbeddedConversationsLinks withSelf(ListConversations200ApplicationJsonEmbeddedConversationsLinksSelf self) {
        this.self = self;
        return this;
    }
}