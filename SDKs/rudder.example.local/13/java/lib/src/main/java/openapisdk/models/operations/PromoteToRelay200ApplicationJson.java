package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PromoteToRelay200ApplicationJson {
    @JsonProperty("action")
    public PromoteToRelay200ApplicationJsonActionEnum action;
    public PromoteToRelay200ApplicationJson withAction(PromoteToRelay200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public String data;
    public PromoteToRelay200ApplicationJson withData(String data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public PromoteToRelay200ApplicationJsonResultEnum result;
    public PromoteToRelay200ApplicationJson withResult(PromoteToRelay200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}