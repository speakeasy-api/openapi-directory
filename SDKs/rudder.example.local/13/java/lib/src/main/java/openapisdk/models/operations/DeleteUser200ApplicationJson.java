package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteUser200ApplicationJson {
    @JsonProperty("action")
    public DeleteUser200ApplicationJsonActionEnum action;
    public DeleteUser200ApplicationJson withAction(DeleteUser200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public DeleteUser200ApplicationJsonData data;
    public DeleteUser200ApplicationJson withData(DeleteUser200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public DeleteUser200ApplicationJsonResultEnum result;
    public DeleteUser200ApplicationJson withResult(DeleteUser200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}