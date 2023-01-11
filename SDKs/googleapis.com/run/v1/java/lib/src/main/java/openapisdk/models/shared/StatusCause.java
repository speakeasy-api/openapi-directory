package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StatusCause
 * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
**/
public class StatusCause {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public StatusCause withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public StatusCause withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public StatusCause withReason(String reason) {
        this.reason = reason;
        return this;
    }
}