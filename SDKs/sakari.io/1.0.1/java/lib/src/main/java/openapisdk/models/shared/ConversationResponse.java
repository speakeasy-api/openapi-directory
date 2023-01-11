package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConversationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Conversation data;
    public ConversationResponse withData(Conversation data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public ConversationResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}