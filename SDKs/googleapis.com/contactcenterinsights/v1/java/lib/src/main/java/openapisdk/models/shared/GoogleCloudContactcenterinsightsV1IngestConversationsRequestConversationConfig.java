package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig
 * Configuration that applies to all conversations.
**/
public class GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentId")
    public String agentId;
    public GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
}