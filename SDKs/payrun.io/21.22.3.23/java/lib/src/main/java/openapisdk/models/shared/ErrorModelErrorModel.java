package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ErrorModelErrorModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public ErrorModelErrorModel withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCategory")
    public ErrorModelErrorModelErrorCategoryEnum errorCategory;
    public ErrorModelErrorModel withErrorCategory(ErrorModelErrorModelErrorCategoryEnum errorCategory) {
        this.errorCategory = errorCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public ErrorModelErrorModelErrors errors;
    public ErrorModelErrorModel withErrors(ErrorModelErrorModelErrors errors) {
        this.errors = errors;
        return this;
    }
}