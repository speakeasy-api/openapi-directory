package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchInputMarketingEventSubscriber
 * List of HubSpot contacts to subscribe to the marketing event
**/
public class BatchInputMarketingEventSubscriber {
    @JsonProperty("inputs")
    public MarketingEventSubscriber[] inputs;
    public BatchInputMarketingEventSubscriber withInputs(MarketingEventSubscriber[] inputs) {
        this.inputs = inputs;
        return this;
    }
}