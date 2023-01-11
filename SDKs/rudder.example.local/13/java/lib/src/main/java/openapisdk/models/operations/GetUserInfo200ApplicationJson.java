package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetUserInfo200ApplicationJson {
    @JsonProperty("action")
    public GetUserInfo200ApplicationJsonActionEnum action;
    public GetUserInfo200ApplicationJson withAction(GetUserInfo200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetUserInfo200ApplicationJsonData data;
    public GetUserInfo200ApplicationJson withData(GetUserInfo200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetUserInfo200ApplicationJsonResultEnum result;
    public GetUserInfo200ApplicationJson withResult(GetUserInfo200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}