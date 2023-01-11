package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LinksConversation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public LinksConversationSelf self;
    public LinksConversation withSelf(LinksConversationSelf self) {
        this.self = self;
        return this;
    }
}