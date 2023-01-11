package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListConversations200ApplicationJsonEmbedded
 * A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
**/
public class ListConversations200ApplicationJsonEmbedded {
    @JsonProperty("conversations")
    public ListConversations200ApplicationJsonEmbeddedConversations[] conversations;
    public ListConversations200ApplicationJsonEmbedded withConversations(ListConversations200ApplicationJsonEmbeddedConversations[] conversations) {
        this.conversations = conversations;
        return this;
    }
}