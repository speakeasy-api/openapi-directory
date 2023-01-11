package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValidateCreateMembershipResponse
 * Response message for the `GkeHub.ValidateCreateMembership` method.
**/
public class ValidateCreateMembershipResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validationResults")
    public ValidationResult[] validationResults;
    public ValidateCreateMembershipResponse withValidationResults(ValidationResult[] validationResults) {
        this.validationResults = validationResults;
        return this;
    }
}