package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCveCheckConfiguration200ApplicationJson {
    @JsonProperty("action")
    public UpdateCveCheckConfiguration200ApplicationJsonActionEnum action;
    public UpdateCveCheckConfiguration200ApplicationJson withAction(UpdateCveCheckConfiguration200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public UpdateCveCheckConfiguration200ApplicationJsonData data;
    public UpdateCveCheckConfiguration200ApplicationJson withData(UpdateCveCheckConfiguration200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public UpdateCveCheckConfiguration200ApplicationJsonResultEnum result;
    public UpdateCveCheckConfiguration200ApplicationJson withResult(UpdateCveCheckConfiguration200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}