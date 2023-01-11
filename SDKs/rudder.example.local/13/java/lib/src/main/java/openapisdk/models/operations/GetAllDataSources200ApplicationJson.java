package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAllDataSources200ApplicationJson {
    @JsonProperty("action")
    public GetAllDataSources200ApplicationJsonActionEnum action;
    public GetAllDataSources200ApplicationJson withAction(GetAllDataSources200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetAllDataSources200ApplicationJsonData data;
    public GetAllDataSources200ApplicationJson withData(GetAllDataSources200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetAllDataSources200ApplicationJsonResultEnum result;
    public GetAllDataSources200ApplicationJson withResult(GetAllDataSources200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}