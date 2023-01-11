package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CallbackCompletionBatchRequest
 * Any information to send back to Workflows when completing an action callback as part of a batch request.
**/
public class CallbackCompletionBatchRequest {
    @JsonProperty("callbackId")
    public String callbackId;
    public CallbackCompletionBatchRequest withCallbackId(String callbackId) {
        this.callbackId = callbackId;
        return this;
    }
    @JsonProperty("outputFields")
    public java.util.Map<String, String> outputFields;
    public CallbackCompletionBatchRequest withOutputFields(java.util.Map<String, String> outputFields) {
        this.outputFields = outputFields;
        return this;
    }
}