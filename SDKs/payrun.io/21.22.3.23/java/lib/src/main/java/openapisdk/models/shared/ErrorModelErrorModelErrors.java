package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorModelErrorModelErrors
 * The error models' errors
**/
public class ErrorModelErrorModelErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Error")
    public String[] error;
    public ErrorModelErrorModelErrors withError(String[] error) {
        this.error = error;
        return this;
    }
}