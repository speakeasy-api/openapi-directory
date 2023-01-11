package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeclineChangeRequest200ApplicationJson {
    @JsonProperty("action")
    public DeclineChangeRequest200ApplicationJsonActionEnum action;
    public DeclineChangeRequest200ApplicationJson withAction(DeclineChangeRequest200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public DeclineChangeRequest200ApplicationJsonData data;
    public DeclineChangeRequest200ApplicationJson withData(DeclineChangeRequest200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public DeclineChangeRequest200ApplicationJsonResultEnum result;
    public DeclineChangeRequest200ApplicationJson withResult(DeclineChangeRequest200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}