package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteParameter200ApplicationJson {
    @JsonProperty("action")
    public DeleteParameter200ApplicationJsonActionEnum action;
    public DeleteParameter200ApplicationJson withAction(DeleteParameter200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public DeleteParameter200ApplicationJsonData data;
    public DeleteParameter200ApplicationJson withData(DeleteParameter200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public DeleteParameter200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("result")
    public DeleteParameter200ApplicationJsonResultEnum result;
    public DeleteParameter200ApplicationJson withResult(DeleteParameter200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}