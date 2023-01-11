package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMessagingConfigurationListMessagingConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messaging_configurations")
    public openapisdk.models.shared.VerifyV2ServiceMessagingConfiguration[] messagingConfigurations;
    public ListMessagingConfigurationListMessagingConfigurationResponse withMessagingConfigurations(openapisdk.models.shared.VerifyV2ServiceMessagingConfiguration[] messagingConfigurations) {
        this.messagingConfigurations = messagingConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListMessagingConfigurationListMessagingConfigurationResponseMeta meta;
    public ListMessagingConfigurationListMessagingConfigurationResponse withMeta(ListMessagingConfigurationListMessagingConfigurationResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}