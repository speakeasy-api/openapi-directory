package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateDirective200ApplicationJson {
    @JsonProperty("action")
    public UpdateDirective200ApplicationJsonActionEnum action;
    public UpdateDirective200ApplicationJson withAction(UpdateDirective200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public UpdateDirective200ApplicationJsonData data;
    public UpdateDirective200ApplicationJson withData(UpdateDirective200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public UpdateDirective200ApplicationJsonResultEnum result;
    public UpdateDirective200ApplicationJson withResult(UpdateDirective200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}