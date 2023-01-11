package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SubscriptionDefinitionsResponse
 * A collection of subscription definitions for the portal.
**/
public class SubscriptionDefinitionsResponse {
    @JsonProperty("subscriptionDefinitions")
    public SubscriptionDefinition[] subscriptionDefinitions;
    public SubscriptionDefinitionsResponse withSubscriptionDefinitions(SubscriptionDefinition[] subscriptionDefinitions) {
        this.subscriptionDefinitions = subscriptionDefinitions;
        return this;
    }
}