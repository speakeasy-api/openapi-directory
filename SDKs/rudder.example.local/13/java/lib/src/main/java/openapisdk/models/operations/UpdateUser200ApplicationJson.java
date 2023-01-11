package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateUser200ApplicationJson {
    @JsonProperty("action")
    public UpdateUser200ApplicationJsonActionEnum action;
    public UpdateUser200ApplicationJson withAction(UpdateUser200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public UpdateUser200ApplicationJsonData data;
    public UpdateUser200ApplicationJson withData(UpdateUser200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public UpdateUser200ApplicationJsonResultEnum result;
    public UpdateUser200ApplicationJson withResult(UpdateUser200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}