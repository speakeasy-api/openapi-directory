package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BadRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hints")
    public ErrorMessage[] hints;
    public BadRequest withHints(ErrorMessage[] hints) {
        this.hints = hints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public BadRequest withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public BadRequest withStatus(String status) {
        this.status = status;
        return this;
    }
}