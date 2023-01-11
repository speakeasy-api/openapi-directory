package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchInputSubscriptionBatchUpdateRequest {
    @JsonProperty("inputs")
    public SubscriptionBatchUpdateRequest[] inputs;
    public BatchInputSubscriptionBatchUpdateRequest withInputs(SubscriptionBatchUpdateRequest[] inputs) {
        this.inputs = inputs;
        return this;
    }
}