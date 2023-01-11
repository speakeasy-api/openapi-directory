package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListPendingNodes200ApplicationJson {
    @JsonProperty("action")
    public ListPendingNodes200ApplicationJsonActionEnum action;
    public ListPendingNodes200ApplicationJson withAction(ListPendingNodes200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ListPendingNodes200ApplicationJsonData data;
    public ListPendingNodes200ApplicationJson withData(ListPendingNodes200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ListPendingNodes200ApplicationJsonResultEnum result;
    public ListPendingNodes200ApplicationJson withResult(ListPendingNodes200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}