package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LoginResponse {
    @JsonProperty("api")
    public String api;
    public LoginResponse withApi(String api) {
        this.api = api;
        return this;
    }
    @JsonProperty("method")
    public String method;
    public LoginResponse withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonProperty("response")
    public LoginResponseResponse response;
    public LoginResponse withResponse(LoginResponseResponse response) {
        this.response = response;
        return this;
    }
    @JsonProperty("status")
    public LoginResponseStatusEnum status;
    public LoginResponse withStatus(LoginResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}