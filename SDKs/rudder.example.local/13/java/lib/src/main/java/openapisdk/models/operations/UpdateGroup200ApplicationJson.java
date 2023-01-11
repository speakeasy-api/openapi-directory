package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateGroup200ApplicationJson {
    @JsonProperty("action")
    public UpdateGroup200ApplicationJsonActionEnum action;
    public UpdateGroup200ApplicationJson withAction(UpdateGroup200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public UpdateGroup200ApplicationJsonData data;
    public UpdateGroup200ApplicationJson withData(UpdateGroup200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public UpdateGroup200ApplicationJsonResultEnum result;
    public UpdateGroup200ApplicationJson withResult(UpdateGroup200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}