package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReloadGroup200ApplicationJson {
    @JsonProperty("action")
    public ReloadGroup200ApplicationJsonActionEnum action;
    public ReloadGroup200ApplicationJson withAction(ReloadGroup200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ReloadGroup200ApplicationJsonData data;
    public ReloadGroup200ApplicationJson withData(ReloadGroup200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ReloadGroup200ApplicationJsonResultEnum result;
    public ReloadGroup200ApplicationJson withResult(ReloadGroup200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}