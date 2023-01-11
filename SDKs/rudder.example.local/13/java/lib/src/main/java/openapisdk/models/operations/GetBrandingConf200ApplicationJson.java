package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBrandingConf200ApplicationJson {
    @JsonProperty("action")
    public GetBrandingConf200ApplicationJsonActionEnum action;
    public GetBrandingConf200ApplicationJson withAction(GetBrandingConf200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetBrandingConf200ApplicationJsonData data;
    public GetBrandingConf200ApplicationJson withData(GetBrandingConf200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetBrandingConf200ApplicationJsonResultEnum result;
    public GetBrandingConf200ApplicationJson withResult(GetBrandingConf200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}