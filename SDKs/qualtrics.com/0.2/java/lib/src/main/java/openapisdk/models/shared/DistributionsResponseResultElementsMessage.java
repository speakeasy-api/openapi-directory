package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DistributionsResponseResultElementsMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("libraryId")
    public Object libraryId;
    public DistributionsResponseResultElementsMessage withLibraryId(Object libraryId) {
        this.libraryId = libraryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageId")
    public Object messageId;
    public DistributionsResponseResultElementsMessage withMessageId(Object messageId) {
        this.messageId = messageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageText")
    public Object messageText;
    public DistributionsResponseResultElementsMessage withMessageText(Object messageText) {
        this.messageText = messageText;
        return this;
    }
}