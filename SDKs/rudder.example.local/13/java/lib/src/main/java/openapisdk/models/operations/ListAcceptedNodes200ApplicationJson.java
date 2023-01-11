package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListAcceptedNodes200ApplicationJson {
    @JsonProperty("action")
    public ListAcceptedNodes200ApplicationJsonActionEnum action;
    public ListAcceptedNodes200ApplicationJson withAction(ListAcceptedNodes200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ListAcceptedNodes200ApplicationJsonData data;
    public ListAcceptedNodes200ApplicationJson withData(ListAcceptedNodes200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ListAcceptedNodes200ApplicationJsonResultEnum result;
    public ListAcceptedNodes200ApplicationJson withResult(ListAcceptedNodes200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}