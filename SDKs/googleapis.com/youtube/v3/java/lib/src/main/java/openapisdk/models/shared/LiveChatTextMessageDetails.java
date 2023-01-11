package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiveChatTextMessageDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageText")
    public String messageText;
    public LiveChatTextMessageDetails withMessageText(String messageText) {
        this.messageText = messageText;
        return this;
    }
}