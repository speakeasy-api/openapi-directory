package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchInputMarketingEventEmailSubscriber
 * List of marketing event details to create or update
**/
public class BatchInputMarketingEventEmailSubscriber {
    @JsonProperty("inputs")
    public MarketingEventEmailSubscriber[] inputs;
    public BatchInputMarketingEventEmailSubscriber withInputs(MarketingEventEmailSubscriber[] inputs) {
        this.inputs = inputs;
        return this;
    }
}