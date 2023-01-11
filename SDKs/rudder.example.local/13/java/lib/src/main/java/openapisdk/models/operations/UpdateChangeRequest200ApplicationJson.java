package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateChangeRequest200ApplicationJson {
    @JsonProperty("action")
    public UpdateChangeRequest200ApplicationJsonActionEnum action;
    public UpdateChangeRequest200ApplicationJson withAction(UpdateChangeRequest200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public UpdateChangeRequest200ApplicationJsonData data;
    public UpdateChangeRequest200ApplicationJson withData(UpdateChangeRequest200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public UpdateChangeRequest200ApplicationJsonResultEnum result;
    public UpdateChangeRequest200ApplicationJson withResult(UpdateChangeRequest200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}