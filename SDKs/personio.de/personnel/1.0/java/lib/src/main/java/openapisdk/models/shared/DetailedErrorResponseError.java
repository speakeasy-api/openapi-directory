package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetailedErrorResponseError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public DetailedErrorResponseError withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detailed_message")
    public DetailedErrorResponseErrorDetailedMessage[] detailedMessage;
    public DetailedErrorResponseError withDetailedMessage(DetailedErrorResponseErrorDetailedMessage[] detailedMessage) {
        this.detailedMessage = detailedMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public DetailedErrorResponseError withMessage(String message) {
        this.message = message;
        return this;
    }
}