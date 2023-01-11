package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReloadTechniques200ApplicationJson {
    @JsonProperty("action")
    public ReloadTechniques200ApplicationJsonActionEnum action;
    public ReloadTechniques200ApplicationJson withAction(ReloadTechniques200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ReloadTechniques200ApplicationJsonData data;
    public ReloadTechniques200ApplicationJson withData(ReloadTechniques200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ReloadTechniques200ApplicationJsonResultEnum result;
    public ReloadTechniques200ApplicationJson withResult(ReloadTechniques200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}