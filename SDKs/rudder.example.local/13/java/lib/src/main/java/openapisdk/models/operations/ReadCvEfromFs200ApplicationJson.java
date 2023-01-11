package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReadCvEfromFs200ApplicationJson {
    @JsonProperty("action")
    public ReadCvEfromFs200ApplicationJsonActionEnum action;
    public ReadCvEfromFs200ApplicationJson withAction(ReadCvEfromFs200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ReadCvEfromFs200ApplicationJsonData data;
    public ReadCvEfromFs200ApplicationJson withData(ReadCvEfromFs200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ReadCvEfromFs200ApplicationJsonResultEnum result;
    public ReadCvEfromFs200ApplicationJson withResult(ReadCvEfromFs200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}