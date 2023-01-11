package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SaveWorkflowUser200ApplicationJson {
    @JsonProperty("action")
    public SaveWorkflowUser200ApplicationJsonActionEnum action;
    public SaveWorkflowUser200ApplicationJson withAction(SaveWorkflowUser200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public openapisdk.models.shared.ValidatedUser data;
    public SaveWorkflowUser200ApplicationJson withData(openapisdk.models.shared.ValidatedUser data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public SaveWorkflowUser200ApplicationJsonResultEnum result;
    public SaveWorkflowUser200ApplicationJson withResult(SaveWorkflowUser200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}