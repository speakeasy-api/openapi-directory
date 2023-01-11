package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchInputCallbackCompletionBatchRequest {
    @JsonProperty("inputs")
    public CallbackCompletionBatchRequest[] inputs;
    public BatchInputCallbackCompletionBatchRequest withInputs(CallbackCompletionBatchRequest[] inputs) {
        this.inputs = inputs;
        return this;
    }
}