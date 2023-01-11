package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteNode200ApplicationJson {
    @JsonProperty("action")
    public DeleteNode200ApplicationJsonActionEnum action;
    public DeleteNode200ApplicationJson withAction(DeleteNode200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public DeleteNode200ApplicationJsonData data;
    public DeleteNode200ApplicationJson withData(DeleteNode200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public DeleteNode200ApplicationJsonResultEnum result;
    public DeleteNode200ApplicationJson withResult(DeleteNode200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}