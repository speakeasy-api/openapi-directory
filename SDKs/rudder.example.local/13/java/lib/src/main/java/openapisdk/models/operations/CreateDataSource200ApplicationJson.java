package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateDataSource200ApplicationJson {
    @JsonProperty("action")
    public CreateDataSource200ApplicationJsonActionEnum action;
    public CreateDataSource200ApplicationJson withAction(CreateDataSource200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public CreateDataSource200ApplicationJsonData data;
    public CreateDataSource200ApplicationJson withData(CreateDataSource200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public CreateDataSource200ApplicationJsonResultEnum result;
    public CreateDataSource200ApplicationJson withResult(CreateDataSource200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}