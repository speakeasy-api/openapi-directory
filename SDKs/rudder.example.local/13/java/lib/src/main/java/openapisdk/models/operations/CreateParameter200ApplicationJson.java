package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateParameter200ApplicationJson {
    @JsonProperty("action")
    public CreateParameter200ApplicationJsonActionEnum action;
    public CreateParameter200ApplicationJson withAction(CreateParameter200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public CreateParameter200ApplicationJsonData data;
    public CreateParameter200ApplicationJson withData(CreateParameter200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public CreateParameter200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("result")
    public CreateParameter200ApplicationJsonResultEnum result;
    public CreateParameter200ApplicationJson withResult(CreateParameter200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}