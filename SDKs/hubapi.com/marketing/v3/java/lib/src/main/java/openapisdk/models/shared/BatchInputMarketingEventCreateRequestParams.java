package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchInputMarketingEventCreateRequestParams {
    @JsonProperty("inputs")
    public MarketingEventCreateRequestParams[] inputs;
    public BatchInputMarketingEventCreateRequestParams withInputs(MarketingEventCreateRequestParams[] inputs) {
        this.inputs = inputs;
        return this;
    }
}