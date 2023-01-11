package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReloadOneDatasourceAllNodes200ApplicationJson {
    @JsonProperty("action")
    public ReloadOneDatasourceAllNodes200ApplicationJsonActionEnum action;
    public ReloadOneDatasourceAllNodes200ApplicationJson withAction(ReloadOneDatasourceAllNodes200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public String data;
    public ReloadOneDatasourceAllNodes200ApplicationJson withData(String data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ReloadOneDatasourceAllNodes200ApplicationJsonResultEnum result;
    public ReloadOneDatasourceAllNodes200ApplicationJson withResult(ReloadOneDatasourceAllNodes200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}