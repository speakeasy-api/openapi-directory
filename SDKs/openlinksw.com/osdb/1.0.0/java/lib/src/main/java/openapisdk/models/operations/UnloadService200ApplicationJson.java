package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UnloadService200ApplicationJson {
    @JsonProperty("api")
    public String api;
    public UnloadService200ApplicationJson withApi(String api) {
        this.api = api;
        return this;
    }
    @JsonProperty("method")
    public String method;
    public UnloadService200ApplicationJson withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonProperty("response")
    public String response;
    public UnloadService200ApplicationJson withResponse(String response) {
        this.response = response;
        return this;
    }
    @JsonProperty("status")
    public UnloadService200ApplicationJsonStatusEnum status;
    public UnloadService200ApplicationJson withStatus(UnloadService200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}