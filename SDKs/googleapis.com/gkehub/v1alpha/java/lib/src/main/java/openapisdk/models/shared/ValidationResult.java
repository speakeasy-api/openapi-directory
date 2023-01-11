package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValidationResult
 * ValidationResults are results set by each validator running during ValidateCreateMembership.
**/
public class ValidationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public String result;
    public ValidationResult withResult(String result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public ValidationResult withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validator")
    public ValidationResultValidatorEnum validator;
    public ValidationResult withValidator(ValidationResultValidatorEnum validator) {
        this.validator = validator;
        return this;
    }
}