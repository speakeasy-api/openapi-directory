package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateDirective200ApplicationJson {
    @JsonProperty("action")
    public CreateDirective200ApplicationJsonActionEnum action;
    public CreateDirective200ApplicationJson withAction(CreateDirective200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public CreateDirective200ApplicationJsonData data;
    public CreateDirective200ApplicationJson withData(CreateDirective200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public CreateDirective200ApplicationJsonResultEnum result;
    public CreateDirective200ApplicationJson withResult(CreateDirective200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}