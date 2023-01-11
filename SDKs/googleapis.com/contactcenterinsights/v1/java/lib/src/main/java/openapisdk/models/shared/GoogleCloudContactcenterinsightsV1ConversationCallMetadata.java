package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1ConversationCallMetadata
 * Call-specific metadata.
**/
public class GoogleCloudContactcenterinsightsV1ConversationCallMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentChannel")
    public Integer agentChannel;
    public GoogleCloudContactcenterinsightsV1ConversationCallMetadata withAgentChannel(Integer agentChannel) {
        this.agentChannel = agentChannel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerChannel")
    public Integer customerChannel;
    public GoogleCloudContactcenterinsightsV1ConversationCallMetadata withCustomerChannel(Integer customerChannel) {
        this.customerChannel = customerChannel;
        return this;
    }
}