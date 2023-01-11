package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LinksConversationsList
 * A series of links between resources in this API in the http://stateless.co/hal_specification.html.
**/
public class LinksConversationsList {
    @JsonProperty("self")
    public LinksConversationsListSelf self;
    public LinksConversationsList withSelf(LinksConversationsListSelf self) {
        this.self = self;
        return this;
    }
}