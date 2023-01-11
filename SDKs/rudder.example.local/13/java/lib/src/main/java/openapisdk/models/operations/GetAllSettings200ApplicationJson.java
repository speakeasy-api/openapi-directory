package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAllSettings200ApplicationJson {
    @JsonProperty("action")
    public GetAllSettings200ApplicationJsonActionEnum action;
    public GetAllSettings200ApplicationJson withAction(GetAllSettings200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetAllSettings200ApplicationJsonData data;
    public GetAllSettings200ApplicationJson withData(GetAllSettings200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetAllSettings200ApplicationJsonResultEnum result;
    public GetAllSettings200ApplicationJson withResult(GetAllSettings200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}