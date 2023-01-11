package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ErrorUnauthorized {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public ErrorUnauthorized withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ErrorUnauthorized withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public ErrorUnauthorized withStatus(Long status) {
        this.status = status;
        return this;
    }
}