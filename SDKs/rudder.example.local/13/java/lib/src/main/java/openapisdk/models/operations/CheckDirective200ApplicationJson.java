package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CheckDirective200ApplicationJson {
    @JsonProperty("action")
    public CheckDirective200ApplicationJsonActionEnum action;
    public CheckDirective200ApplicationJson withAction(CheckDirective200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public CheckDirective200ApplicationJsonData data;
    public CheckDirective200ApplicationJson withData(CheckDirective200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public CheckDirective200ApplicationJsonResultEnum result;
    public CheckDirective200ApplicationJson withResult(CheckDirective200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}