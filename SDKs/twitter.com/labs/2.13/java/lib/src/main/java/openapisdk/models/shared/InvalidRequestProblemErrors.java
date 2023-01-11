package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InvalidRequestProblemErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public InvalidRequestProblemErrors withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, String[]> parameters;
    public InvalidRequestProblemErrors withParameters(java.util.Map<String, String[]> parameters) {
        this.parameters = parameters;
        return this;
    }
}