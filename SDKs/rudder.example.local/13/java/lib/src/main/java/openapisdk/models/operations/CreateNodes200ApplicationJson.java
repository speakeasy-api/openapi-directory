package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateNodes200ApplicationJson {
    @JsonProperty("action")
    public CreateNodes200ApplicationJsonActionEnum action;
    public CreateNodes200ApplicationJson withAction(CreateNodes200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public CreateNodes200ApplicationJsonData data;
    public CreateNodes200ApplicationJson withData(CreateNodes200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public CreateNodes200ApplicationJsonResultEnum result;
    public CreateNodes200ApplicationJson withResult(CreateNodes200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}