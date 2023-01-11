package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ErrorMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error-text")
    public String errorText;
    public ErrorMessage withErrorText(String errorText) {
        this.errorText = errorText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public ErrorMessage withStatus(String status) {
        this.status = status;
        return this;
    }
}