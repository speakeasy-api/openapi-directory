package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddUser200ApplicationJson {
    @JsonProperty("action")
    public AddUser200ApplicationJsonActionEnum action;
    public AddUser200ApplicationJson withAction(AddUser200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public AddUser200ApplicationJsonData data;
    public AddUser200ApplicationJson withData(AddUser200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public AddUser200ApplicationJsonResultEnum result;
    public AddUser200ApplicationJson withResult(AddUser200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}