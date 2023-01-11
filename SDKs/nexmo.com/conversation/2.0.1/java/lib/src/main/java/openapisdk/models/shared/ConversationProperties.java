package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConversationProperties
 * Conversation properties
**/
public class ConversationProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Double ttl;
    public ConversationProperties withTtl(Double ttl) {
        this.ttl = ttl;
        return this;
    }
}