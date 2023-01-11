package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiveChatMessageDeletedDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletedMessageId")
    public String deletedMessageId;
    public LiveChatMessageDeletedDetails withDeletedMessageId(String deletedMessageId) {
        this.deletedMessageId = deletedMessageId;
        return this;
    }
}