package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConversations200ApplicationJsonEmbeddedConversationsLinksSelf {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public ListConversations200ApplicationJsonEmbeddedConversationsLinksSelf withHref(String href) {
        this.href = href;
        return this;
    }
}