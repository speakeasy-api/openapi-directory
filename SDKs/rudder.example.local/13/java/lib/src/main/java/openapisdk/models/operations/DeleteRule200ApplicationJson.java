package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteRule200ApplicationJson {
    @JsonProperty("action")
    public DeleteRule200ApplicationJsonActionEnum action;
    public DeleteRule200ApplicationJson withAction(DeleteRule200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public DeleteRule200ApplicationJsonData data;
    public DeleteRule200ApplicationJson withData(DeleteRule200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public DeleteRule200ApplicationJsonResultEnum result;
    public DeleteRule200ApplicationJson withResult(DeleteRule200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}