package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ValidationError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public ValidationError withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ValidationError withMessage(String message) {
        this.message = message;
        return this;
    }
}