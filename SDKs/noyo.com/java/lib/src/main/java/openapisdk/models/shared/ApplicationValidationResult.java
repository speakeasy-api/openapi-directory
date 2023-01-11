package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApplicationValidationResult {
    @JsonProperty("validation_errors")
    public ApplicationValidationError[] validationErrors;
    public ApplicationValidationResult withValidationErrors(ApplicationValidationError[] validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}