package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChangeRequestDetails200ApplicationJson {
    @JsonProperty("action")
    public ChangeRequestDetails200ApplicationJsonActionEnum action;
    public ChangeRequestDetails200ApplicationJson withAction(ChangeRequestDetails200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ChangeRequestDetails200ApplicationJsonData data;
    public ChangeRequestDetails200ApplicationJson withData(ChangeRequestDetails200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ChangeRequestDetails200ApplicationJsonResultEnum result;
    public ChangeRequestDetails200ApplicationJson withResult(ChangeRequestDetails200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}