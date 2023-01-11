package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ErrorResponse {
    @JsonProperty("error")
    public ErrorResponseError error;
    public ErrorResponse withError(ErrorResponseError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("success")
    public Boolean success;
    public ErrorResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}