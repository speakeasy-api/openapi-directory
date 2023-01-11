package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateRule200ApplicationJson {
    @JsonProperty("action")
    public UpdateRule200ApplicationJsonActionEnum action;
    public UpdateRule200ApplicationJson withAction(UpdateRule200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public UpdateRule200ApplicationJsonData data;
    public UpdateRule200ApplicationJson withData(UpdateRule200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public UpdateRule200ApplicationJsonResultEnum result;
    public UpdateRule200ApplicationJson withResult(UpdateRule200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}