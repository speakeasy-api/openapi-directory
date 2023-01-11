package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiveChatMessageRetractedDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retractedMessageId")
    public String retractedMessageId;
    public LiveChatMessageRetractedDetails withRetractedMessageId(String retractedMessageId) {
        this.retractedMessageId = retractedMessageId;
        return this;
    }
}