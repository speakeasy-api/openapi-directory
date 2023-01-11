package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LoadService200ApplicationJson {
    @JsonProperty("api")
    public String api;
    public LoadService200ApplicationJson withApi(String api) {
        this.api = api;
        return this;
    }
    @JsonProperty("method")
    public String method;
    public LoadService200ApplicationJson withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonProperty("response")
    public String response;
    public LoadService200ApplicationJson withResponse(String response) {
        this.response = response;
        return this;
    }
    @JsonProperty("status")
    public LoadService200ApplicationJsonStatusEnum status;
    public LoadService200ApplicationJson withStatus(LoadService200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}