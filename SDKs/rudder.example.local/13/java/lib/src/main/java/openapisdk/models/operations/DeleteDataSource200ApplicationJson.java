package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDataSource200ApplicationJson {
    @JsonProperty("action")
    public DeleteDataSource200ApplicationJsonActionEnum action;
    public DeleteDataSource200ApplicationJson withAction(DeleteDataSource200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public DeleteDataSource200ApplicationJsonData data;
    public DeleteDataSource200ApplicationJson withData(DeleteDataSource200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public DeleteDataSource200ApplicationJsonResultEnum result;
    public DeleteDataSource200ApplicationJson withResult(DeleteDataSource200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}