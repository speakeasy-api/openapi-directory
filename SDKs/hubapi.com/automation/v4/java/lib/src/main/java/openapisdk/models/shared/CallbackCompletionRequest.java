package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CallbackCompletionRequest
 * Any information to send back to Workflows when completing an action callback.
**/
public class CallbackCompletionRequest {
    @JsonProperty("outputFields")
    public java.util.Map<String, String> outputFields;
    public CallbackCompletionRequest withOutputFields(java.util.Map<String, String> outputFields) {
        this.outputFields = outputFields;
        return this;
    }
}