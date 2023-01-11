package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SendMessage
 * Send Message
**/
public class SendMessage {
    @JsonProperty("from")
    public FromProperty from;
    public SendMessage withFrom(FromProperty from) {
        this.from = from;
        return this;
    }
    @JsonProperty("message")
    public MessageProperty message;
    public SendMessage withMessage(MessageProperty message) {
        this.message = message;
        return this;
    }
    @JsonProperty("to")
    public ToProperty to;
    public SendMessage withTo(ToProperty to) {
        this.to = to;
        return this;
    }
}