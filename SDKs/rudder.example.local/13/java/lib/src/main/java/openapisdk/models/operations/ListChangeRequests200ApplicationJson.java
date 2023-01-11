package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListChangeRequests200ApplicationJson {
    @JsonProperty("action")
    public ListChangeRequests200ApplicationJsonActionEnum action;
    public ListChangeRequests200ApplicationJson withAction(ListChangeRequests200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ListChangeRequests200ApplicationJsonData data;
    public ListChangeRequests200ApplicationJson withData(ListChangeRequests200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ListChangeRequests200ApplicationJsonResultEnum result;
    public ListChangeRequests200ApplicationJson withResult(ListChangeRequests200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}