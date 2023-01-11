package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteGroup200ApplicationJson {
    @JsonProperty("action")
    public DeleteGroup200ApplicationJsonActionEnum action;
    public DeleteGroup200ApplicationJson withAction(DeleteGroup200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public DeleteGroup200ApplicationJsonData data;
    public DeleteGroup200ApplicationJson withData(DeleteGroup200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public DeleteGroup200ApplicationJsonResultEnum result;
    public DeleteGroup200ApplicationJson withResult(DeleteGroup200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}