package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConversationsResponseError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public ConversationsResponseError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ConversationsResponseError withMessage(String message) {
        this.message = message;
        return this;
    }
}