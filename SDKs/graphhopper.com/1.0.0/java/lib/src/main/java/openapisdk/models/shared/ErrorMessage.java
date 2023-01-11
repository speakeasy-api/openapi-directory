package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ErrorMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public ErrorMessage withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ErrorMessage withMessage(String message) {
        this.message = message;
        return this;
    }
}