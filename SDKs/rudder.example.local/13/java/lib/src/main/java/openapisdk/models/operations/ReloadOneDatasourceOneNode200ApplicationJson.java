package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReloadOneDatasourceOneNode200ApplicationJson {
    @JsonProperty("action")
    public ReloadOneDatasourceOneNode200ApplicationJsonActionEnum action;
    public ReloadOneDatasourceOneNode200ApplicationJson withAction(ReloadOneDatasourceOneNode200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public String data;
    public ReloadOneDatasourceOneNode200ApplicationJson withData(String data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ReloadOneDatasourceOneNode200ApplicationJsonResultEnum result;
    public ReloadOneDatasourceOneNode200ApplicationJson withResult(ReloadOneDatasourceOneNode200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}