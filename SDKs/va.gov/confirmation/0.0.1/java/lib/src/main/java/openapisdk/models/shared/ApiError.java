package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiError
 * API invocation or processing error
**/
public class ApiError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public ApiErrorErrors[] errors;
    public ApiError withErrors(ApiErrorErrors[] errors) {
        this.errors = errors;
        return this;
    }
}