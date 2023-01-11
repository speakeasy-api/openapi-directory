package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAllCve200ApplicationJson {
    @JsonProperty("action")
    public GetAllCve200ApplicationJsonActionEnum action;
    public GetAllCve200ApplicationJson withAction(GetAllCve200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetAllCve200ApplicationJsonData data;
    public GetAllCve200ApplicationJson withData(GetAllCve200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetAllCve200ApplicationJsonResultEnum result;
    public GetAllCve200ApplicationJson withResult(GetAllCve200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}