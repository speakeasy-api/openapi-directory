package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveValidatedUser200ApplicationJson {
    @JsonProperty("action")
    public RemoveValidatedUser200ApplicationJsonActionEnum action;
    public RemoveValidatedUser200ApplicationJson withAction(RemoveValidatedUser200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public String data;
    public RemoveValidatedUser200ApplicationJson withData(String data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public RemoveValidatedUser200ApplicationJsonResultEnum result;
    public RemoveValidatedUser200ApplicationJson withResult(RemoveValidatedUser200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}