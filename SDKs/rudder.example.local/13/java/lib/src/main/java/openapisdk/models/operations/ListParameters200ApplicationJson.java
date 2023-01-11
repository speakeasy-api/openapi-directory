package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListParameters200ApplicationJson {
    @JsonProperty("action")
    public ListParameters200ApplicationJsonActionEnum action;
    public ListParameters200ApplicationJson withAction(ListParameters200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ListParameters200ApplicationJsonData data;
    public ListParameters200ApplicationJson withData(ListParameters200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ListParameters200ApplicationJsonResultEnum result;
    public ListParameters200ApplicationJson withResult(ListParameters200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}