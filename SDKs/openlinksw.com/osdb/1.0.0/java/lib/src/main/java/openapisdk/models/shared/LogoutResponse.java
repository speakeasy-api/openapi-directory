package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LogoutResponse {
    @JsonProperty("api")
    public String api;
    public LogoutResponse withApi(String api) {
        this.api = api;
        return this;
    }
    @JsonProperty("method")
    public String method;
    public LogoutResponse withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonProperty("response")
    public LogoutResponseResponse response;
    public LogoutResponse withResponse(LogoutResponseResponse response) {
        this.response = response;
        return this;
    }
    @JsonProperty("status")
    public LogoutResponseStatusEnum status;
    public LogoutResponse withStatus(LogoutResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}