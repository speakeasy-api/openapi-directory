package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateDataSource200ApplicationJson {
    @JsonProperty("action")
    public UpdateDataSource200ApplicationJsonActionEnum action;
    public UpdateDataSource200ApplicationJson withAction(UpdateDataSource200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public UpdateDataSource200ApplicationJsonData data;
    public UpdateDataSource200ApplicationJson withData(UpdateDataSource200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public UpdateDataSource200ApplicationJsonResultEnum result;
    public UpdateDataSource200ApplicationJson withResult(UpdateDataSource200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}