package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChangePendingNodeStatus200ApplicationJson {
    @JsonProperty("action")
    public ChangePendingNodeStatus200ApplicationJsonActionEnum action;
    public ChangePendingNodeStatus200ApplicationJson withAction(ChangePendingNodeStatus200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ChangePendingNodeStatus200ApplicationJsonData data;
    public ChangePendingNodeStatus200ApplicationJson withData(ChangePendingNodeStatus200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ChangePendingNodeStatus200ApplicationJsonResultEnum result;
    public ChangePendingNodeStatus200ApplicationJson withResult(ChangePendingNodeStatus200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}