package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetGroupTree200ApplicationJson {
    @JsonProperty("action")
    public GetGroupTree200ApplicationJsonActionEnum action;
    public GetGroupTree200ApplicationJson withAction(GetGroupTree200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetGroupTree200ApplicationJsonData data;
    public GetGroupTree200ApplicationJson withData(GetGroupTree200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetGroupTree200ApplicationJsonResultEnum result;
    public GetGroupTree200ApplicationJson withResult(GetGroupTree200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}