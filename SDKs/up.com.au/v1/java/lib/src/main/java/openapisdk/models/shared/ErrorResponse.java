package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ErrorResponse
 * Generic error response that returns one or more errors.
 * 
**/
public class ErrorResponse {
    @JsonProperty("errors")
    public ErrorObject[] errors;
    public ErrorResponse withErrors(ErrorObject[] errors) {
        this.errors = errors;
        return this;
    }
}