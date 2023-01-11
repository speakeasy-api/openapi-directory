package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReloadBrandingConf200ApplicationJson {
    @JsonProperty("action")
    public ReloadBrandingConf200ApplicationJsonActionEnum action;
    public ReloadBrandingConf200ApplicationJson withAction(ReloadBrandingConf200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ReloadBrandingConf200ApplicationJsonData data;
    public ReloadBrandingConf200ApplicationJson withData(ReloadBrandingConf200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ReloadBrandingConf200ApplicationJsonResultEnum result;
    public ReloadBrandingConf200ApplicationJson withResult(ReloadBrandingConf200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}