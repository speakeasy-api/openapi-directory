package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GroupDetails200ApplicationJson {
    @JsonProperty("action")
    public GroupDetails200ApplicationJsonActionEnum action;
    public GroupDetails200ApplicationJson withAction(GroupDetails200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GroupDetails200ApplicationJsonData data;
    public GroupDetails200ApplicationJson withData(GroupDetails200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GroupDetails200ApplicationJsonResultEnum result;
    public GroupDetails200ApplicationJson withResult(GroupDetails200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}