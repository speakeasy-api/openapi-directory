package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateRule200ApplicationJson {
    @JsonProperty("action")
    public CreateRule200ApplicationJsonActionEnum action;
    public CreateRule200ApplicationJson withAction(CreateRule200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public CreateRule200ApplicationJsonData data;
    public CreateRule200ApplicationJson withData(CreateRule200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public CreateRule200ApplicationJsonResultEnum result;
    public CreateRule200ApplicationJson withResult(CreateRule200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}