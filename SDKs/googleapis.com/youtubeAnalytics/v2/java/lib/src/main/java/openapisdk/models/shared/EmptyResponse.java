package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmptyResponse
 * Empty response.
**/
public class EmptyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Errors errors;
    public EmptyResponse withErrors(Errors errors) {
        this.errors = errors;
        return this;
    }
}