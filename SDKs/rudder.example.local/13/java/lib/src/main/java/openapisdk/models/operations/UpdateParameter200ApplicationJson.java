package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateParameter200ApplicationJson {
    @JsonProperty("action")
    public UpdateParameter200ApplicationJsonActionEnum action;
    public UpdateParameter200ApplicationJson withAction(UpdateParameter200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public UpdateParameter200ApplicationJsonData data;
    public UpdateParameter200ApplicationJson withData(UpdateParameter200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public UpdateParameter200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("result")
    public UpdateParameter200ApplicationJsonResultEnum result;
    public UpdateParameter200ApplicationJson withResult(UpdateParameter200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}