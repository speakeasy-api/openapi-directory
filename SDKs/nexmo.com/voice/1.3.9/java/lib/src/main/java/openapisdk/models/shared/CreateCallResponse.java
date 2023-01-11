package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCallResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversation_uuid")
    public String conversationUuid;
    public CreateCallResponse withConversationUuid(String conversationUuid) {
        this.conversationUuid = conversationUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public DirectionEnum direction;
    public CreateCallResponse withDirection(DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public CreateCallResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public CreateCallResponse withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}