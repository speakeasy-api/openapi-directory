package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObErrorResponse1
 * An array of detail error codes, and messages, and URLs to documentation to help remediation.
**/
public class ObErrorResponse1 {
    @JsonProperty("Code")
    public String code;
    public ObErrorResponse1 withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("Errors")
    public ObError1[] errors;
    public ObErrorResponse1 withErrors(ObError1[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ObErrorResponse1 withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("Message")
    public String message;
    public ObErrorResponse1 withMessage(String message) {
        this.message = message;
        return this;
    }
}