package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReloadAllDatasourcesAllNodes200ApplicationJson {
    @JsonProperty("action")
    public ReloadAllDatasourcesAllNodes200ApplicationJsonActionEnum action;
    public ReloadAllDatasourcesAllNodes200ApplicationJson withAction(ReloadAllDatasourcesAllNodes200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public String data;
    public ReloadAllDatasourcesAllNodes200ApplicationJson withData(String data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ReloadAllDatasourcesAllNodes200ApplicationJsonResultEnum result;
    public ReloadAllDatasourcesAllNodes200ApplicationJson withResult(ReloadAllDatasourcesAllNodes200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}