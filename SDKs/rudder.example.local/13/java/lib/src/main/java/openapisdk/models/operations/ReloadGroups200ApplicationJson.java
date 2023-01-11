package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReloadGroups200ApplicationJson {
    @JsonProperty("action")
    public ReloadGroups200ApplicationJsonActionEnum action;
    public ReloadGroups200ApplicationJson withAction(ReloadGroups200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ReloadGroups200ApplicationJsonData data;
    public ReloadGroups200ApplicationJson withData(ReloadGroups200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ReloadGroups200ApplicationJsonResultEnum result;
    public ReloadGroups200ApplicationJson withResult(ReloadGroups200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}