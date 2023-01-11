package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Sms
 * Message sent
**/
public class Sms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message-count")
    public String messageCount;
    public Sms withMessageCount(String messageCount) {
        this.messageCount = messageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public Message[] messages;
    public Sms withMessages(Message[] messages) {
        this.messages = messages;
        return this;
    }
}