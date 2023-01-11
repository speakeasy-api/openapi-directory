package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListRules200ApplicationJson {
    @JsonProperty("action")
    public ListRules200ApplicationJsonActionEnum action;
    public ListRules200ApplicationJson withAction(ListRules200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ListRules200ApplicationJsonData data;
    public ListRules200ApplicationJson withData(ListRules200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ListRules200ApplicationJsonResultEnum result;
    public ListRules200ApplicationJson withResult(ListRules200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}