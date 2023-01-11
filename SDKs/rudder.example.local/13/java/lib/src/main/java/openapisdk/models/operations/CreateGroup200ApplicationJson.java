package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateGroup200ApplicationJson {
    @JsonProperty("action")
    public CreateGroup200ApplicationJsonActionEnum action;
    public CreateGroup200ApplicationJson withAction(CreateGroup200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public CreateGroup200ApplicationJsonData data;
    public CreateGroup200ApplicationJson withData(CreateGroup200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public CreateGroup200ApplicationJsonResultEnum result;
    public CreateGroup200ApplicationJson withResult(CreateGroup200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}