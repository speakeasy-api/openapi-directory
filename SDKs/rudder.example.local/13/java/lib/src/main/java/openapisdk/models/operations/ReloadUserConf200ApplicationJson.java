package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReloadUserConf200ApplicationJson {
    @JsonProperty("action")
    public ReloadUserConf200ApplicationJsonActionEnum action;
    public ReloadUserConf200ApplicationJson withAction(ReloadUserConf200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ReloadUserConf200ApplicationJsonData data;
    public ReloadUserConf200ApplicationJson withData(ReloadUserConf200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ReloadUserConf200ApplicationJsonResultEnum result;
    public ReloadUserConf200ApplicationJson withResult(ReloadUserConf200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}