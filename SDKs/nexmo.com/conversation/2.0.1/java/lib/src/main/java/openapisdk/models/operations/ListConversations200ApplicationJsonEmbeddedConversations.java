package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConversations200ApplicationJsonEmbeddedConversations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public ListConversations200ApplicationJsonEmbeddedConversationsLinks links;
    public ListConversations200ApplicationJsonEmbeddedConversations withLinks(ListConversations200ApplicationJsonEmbeddedConversationsLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ListConversations200ApplicationJsonEmbeddedConversations withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("uuid")
    public String uuid;
    public ListConversations200ApplicationJsonEmbeddedConversations withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}