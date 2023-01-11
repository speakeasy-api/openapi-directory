package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendMessageRequest
 * Request to send a message to specified target.
**/
public class SendMessageRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public Message message;
    public SendMessageRequest withMessage(Message message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validateOnly")
    public Boolean validateOnly;
    public SendMessageRequest withValidateOnly(Boolean validateOnly) {
        this.validateOnly = validateOnly;
        return this;
    }
}