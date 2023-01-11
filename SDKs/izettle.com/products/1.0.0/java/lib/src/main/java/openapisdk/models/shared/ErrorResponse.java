package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ErrorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("developerMessage")
    public String developerMessage;
    public ErrorResponse withDeveloperMessage(String developerMessage) {
        this.developerMessage = developerMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorType")
    public String errorType;
    public ErrorResponse withErrorType(String errorType) {
        this.errorType = errorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("violations")
    public ConstraintViolation[] violations;
    public ErrorResponse withViolations(ConstraintViolation[] violations) {
        this.violations = violations;
        return this;
    }
}