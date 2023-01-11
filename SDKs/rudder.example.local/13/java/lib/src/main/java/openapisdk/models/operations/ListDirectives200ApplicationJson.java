package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListDirectives200ApplicationJson {
    @JsonProperty("action")
    public ListDirectives200ApplicationJsonActionEnum action;
    public ListDirectives200ApplicationJson withAction(ListDirectives200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ListDirectives200ApplicationJsonData data;
    public ListDirectives200ApplicationJson withData(ListDirectives200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ListDirectives200ApplicationJsonResultEnum result;
    public ListDirectives200ApplicationJson withResult(ListDirectives200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}