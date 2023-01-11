package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNode200ApplicationJson {
    @JsonProperty("action")
    public UpdateNode200ApplicationJsonActionEnum action;
    public UpdateNode200ApplicationJson withAction(UpdateNode200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public UpdateNode200ApplicationJsonData data;
    public UpdateNode200ApplicationJson withData(UpdateNode200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public UpdateNode200ApplicationJsonResultEnum result;
    public UpdateNode200ApplicationJson withResult(UpdateNode200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}