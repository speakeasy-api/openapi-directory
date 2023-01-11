package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValidationErrorSimple
 * Validation Error Simple
**/
public class ValidationErrorSimple {
    @JsonProperty("documentation_url")
    public String documentationUrl;
    public ValidationErrorSimple withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public String[] errors;
    public ValidationErrorSimple withErrors(String[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public ValidationErrorSimple withMessage(String message) {
        this.message = message;
        return this;
    }
}