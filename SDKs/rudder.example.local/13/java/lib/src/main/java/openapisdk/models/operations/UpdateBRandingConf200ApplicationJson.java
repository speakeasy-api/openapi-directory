package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateBRandingConf200ApplicationJson {
    @JsonProperty("action")
    public UpdateBRandingConf200ApplicationJsonActionEnum action;
    public UpdateBRandingConf200ApplicationJson withAction(UpdateBRandingConf200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public UpdateBRandingConf200ApplicationJsonData data;
    public UpdateBRandingConf200ApplicationJson withData(UpdateBRandingConf200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public UpdateBRandingConf200ApplicationJsonResultEnum result;
    public UpdateBRandingConf200ApplicationJson withResult(UpdateBRandingConf200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}