package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValidationError
 * Validation Error
**/
public class ValidationError {
    @JsonProperty("documentation_url")
    public String documentationUrl;
    public ValidationError withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public ValidationErrorErrors[] errors;
    public ValidationError withErrors(ValidationErrorErrors[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public ValidationError withMessage(String message) {
        this.message = message;
        return this;
    }
}