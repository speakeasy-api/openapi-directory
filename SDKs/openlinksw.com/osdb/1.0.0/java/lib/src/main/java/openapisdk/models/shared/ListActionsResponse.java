package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListActionsResponse {
    @JsonProperty("api")
    public String api;
    public ListActionsResponse withApi(String api) {
        this.api = api;
        return this;
    }
    @JsonProperty("method")
    public String method;
    public ListActionsResponse withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonProperty("response")
    public ActionDescription[] response;
    public ListActionsResponse withResponse(ActionDescription[] response) {
        this.response = response;
        return this;
    }
    @JsonProperty("status")
    public ListActionsResponseStatusEnum status;
    public ListActionsResponse withStatus(ListActionsResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}