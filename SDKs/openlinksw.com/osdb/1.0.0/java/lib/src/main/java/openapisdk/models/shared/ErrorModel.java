package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ErrorModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api")
    public String api;
    public ErrorModel withApi(String api) {
        this.api = api;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public ErrorModel withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public String response;
    public ErrorModel withResponse(String response) {
        this.response = response;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ErrorModelStatusEnum status;
    public ErrorModel withStatus(ErrorModelStatusEnum status) {
        this.status = status;
        return this;
    }
}