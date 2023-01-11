package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListGroups200ApplicationJson {
    @JsonProperty("action")
    public ListGroups200ApplicationJsonActionEnum action;
    public ListGroups200ApplicationJson withAction(ListGroups200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ListGroups200ApplicationJsonData data;
    public ListGroups200ApplicationJson withData(ListGroups200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ListGroups200ApplicationJsonResultEnum result;
    public ListGroups200ApplicationJson withResult(ListGroups200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}