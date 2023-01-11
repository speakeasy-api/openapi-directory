package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchInputMarketingEventExternalUniqueIdentifier {
    @JsonProperty("inputs")
    public MarketingEventExternalUniqueIdentifier[] inputs;
    public BatchInputMarketingEventExternalUniqueIdentifier withInputs(MarketingEventExternalUniqueIdentifier[] inputs) {
        this.inputs = inputs;
        return this;
    }
}