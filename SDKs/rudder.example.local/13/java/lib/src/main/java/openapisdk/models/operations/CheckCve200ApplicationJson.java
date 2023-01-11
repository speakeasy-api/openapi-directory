package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CheckCve200ApplicationJson {
    @JsonProperty("action")
    public CheckCve200ApplicationJsonActionEnum action;
    public CheckCve200ApplicationJson withAction(CheckCve200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public CheckCve200ApplicationJsonData data;
    public CheckCve200ApplicationJson withData(CheckCve200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public CheckCve200ApplicationJsonResultEnum result;
    public CheckCve200ApplicationJson withResult(CheckCve200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}