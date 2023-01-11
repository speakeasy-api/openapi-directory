package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ApiError
 * API invocation or processing error
**/
public class ApiError {
    @JsonProperty("errors")
    public ErrorMessage[] errors;
    public ApiError withErrors(ErrorMessage[] errors) {
        this.errors = errors;
        return this;
    }
}