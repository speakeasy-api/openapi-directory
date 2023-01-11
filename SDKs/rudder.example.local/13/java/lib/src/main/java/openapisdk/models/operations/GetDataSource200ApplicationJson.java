package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDataSource200ApplicationJson {
    @JsonProperty("action")
    public GetDataSource200ApplicationJsonActionEnum action;
    public GetDataSource200ApplicationJson withAction(GetDataSource200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetDataSource200ApplicationJsonData data;
    public GetDataSource200ApplicationJson withData(GetDataSource200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetDataSource200ApplicationJsonResultEnum result;
    public GetDataSource200ApplicationJson withResult(GetDataSource200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}