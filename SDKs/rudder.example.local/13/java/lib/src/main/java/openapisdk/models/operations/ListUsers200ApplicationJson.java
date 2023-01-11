package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListUsers200ApplicationJson {
    @JsonProperty("action")
    public ListUsers200ApplicationJsonActionEnum action;
    public ListUsers200ApplicationJson withAction(ListUsers200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public openapisdk.models.shared.ValidatedUser[] data;
    public ListUsers200ApplicationJson withData(openapisdk.models.shared.ValidatedUser[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ListUsers200ApplicationJsonResultEnum result;
    public ListUsers200ApplicationJson withResult(ListUsers200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}