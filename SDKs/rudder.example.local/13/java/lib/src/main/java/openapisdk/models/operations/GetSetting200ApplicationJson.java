package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSetting200ApplicationJson {
    @JsonProperty("action")
    public GetSetting200ApplicationJsonActionEnum action;
    public GetSetting200ApplicationJson withAction(GetSetting200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetSetting200ApplicationJsonData data;
    public GetSetting200ApplicationJson withData(GetSetting200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public GetSetting200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("result")
    public GetSetting200ApplicationJsonResultEnum result;
    public GetSetting200ApplicationJson withResult(GetSetting200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}