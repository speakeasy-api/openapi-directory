package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCve200ApplicationJson {
    @JsonProperty("action")
    public UpdateCve200ApplicationJsonActionEnum action;
    public UpdateCve200ApplicationJson withAction(UpdateCve200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public UpdateCve200ApplicationJsonData data;
    public UpdateCve200ApplicationJson withData(UpdateCve200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public UpdateCve200ApplicationJsonResultEnum result;
    public UpdateCve200ApplicationJson withResult(UpdateCve200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}