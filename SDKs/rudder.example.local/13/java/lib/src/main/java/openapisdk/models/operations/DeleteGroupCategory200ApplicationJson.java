package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteGroupCategory200ApplicationJson {
    @JsonProperty("action")
    public DeleteGroupCategory200ApplicationJsonActionEnum action;
    public DeleteGroupCategory200ApplicationJson withAction(DeleteGroupCategory200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public DeleteGroupCategory200ApplicationJsonData data;
    public DeleteGroupCategory200ApplicationJson withData(DeleteGroupCategory200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public DeleteGroupCategory200ApplicationJsonResultEnum result;
    public DeleteGroupCategory200ApplicationJson withResult(DeleteGroupCategory200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}