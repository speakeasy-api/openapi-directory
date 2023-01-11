package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error
 * Error
**/
public class Error {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message-count")
    public String messageCount;
    public Error withMessageCount(String messageCount) {
        this.messageCount = messageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public ErrorMessage[] messages;
    public Error withMessages(ErrorMessage[] messages) {
        this.messages = messages;
        return this;
    }
}