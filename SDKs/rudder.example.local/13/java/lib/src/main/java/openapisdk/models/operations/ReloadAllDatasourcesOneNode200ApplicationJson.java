package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReloadAllDatasourcesOneNode200ApplicationJson {
    @JsonProperty("action")
    public ReloadAllDatasourcesOneNode200ApplicationJsonActionEnum action;
    public ReloadAllDatasourcesOneNode200ApplicationJson withAction(ReloadAllDatasourcesOneNode200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public String data;
    public ReloadAllDatasourcesOneNode200ApplicationJson withData(String data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ReloadAllDatasourcesOneNode200ApplicationJsonResultEnum result;
    public ReloadAllDatasourcesOneNode200ApplicationJson withResult(ReloadAllDatasourcesOneNode200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}