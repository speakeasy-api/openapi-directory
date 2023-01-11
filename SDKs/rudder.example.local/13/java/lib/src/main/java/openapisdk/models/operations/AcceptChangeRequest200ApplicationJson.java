package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AcceptChangeRequest200ApplicationJson {
    @JsonProperty("action")
    public AcceptChangeRequest200ApplicationJsonActionEnum action;
    public AcceptChangeRequest200ApplicationJson withAction(AcceptChangeRequest200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public AcceptChangeRequest200ApplicationJsonData data;
    public AcceptChangeRequest200ApplicationJson withData(AcceptChangeRequest200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public AcceptChangeRequest200ApplicationJsonResultEnum result;
    public AcceptChangeRequest200ApplicationJson withResult(AcceptChangeRequest200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}