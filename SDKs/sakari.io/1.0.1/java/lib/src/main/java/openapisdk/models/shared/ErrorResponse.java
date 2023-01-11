package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ErrorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ErrorResponseError error;
    public ErrorResponse withError(ErrorResponseError error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public ErrorResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}