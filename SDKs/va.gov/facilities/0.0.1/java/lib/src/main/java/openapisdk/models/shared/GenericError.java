package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GenericError
 * A general error json response for things like Authorization Errors or Bad Requests (ex. invalid parameter values).
**/
public class GenericError {
    @JsonProperty("message")
    public String message;
    public GenericError withMessage(String message) {
        this.message = message;
        return this;
    }
}