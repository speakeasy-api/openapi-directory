package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReloadAll200ApplicationJson {
    @JsonProperty("action")
    public ReloadAll200ApplicationJsonActionEnum action;
    public ReloadAll200ApplicationJson withAction(ReloadAll200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ReloadAll200ApplicationJsonData data;
    public ReloadAll200ApplicationJson withData(ReloadAll200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ReloadAll200ApplicationJsonResultEnum result;
    public ReloadAll200ApplicationJson withResult(ReloadAll200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}