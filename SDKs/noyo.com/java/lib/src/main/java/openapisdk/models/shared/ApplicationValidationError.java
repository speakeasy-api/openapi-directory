package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApplicationValidationError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_location")
    public String errorLocation;
    public ApplicationValidationError withErrorLocation(String errorLocation) {
        this.errorLocation = errorLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_message")
    public String errorMessage;
    public ApplicationValidationError withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_type")
    public String errorType;
    public ApplicationValidationError withErrorType(String errorType) {
        this.errorType = errorType;
        return this;
    }
}