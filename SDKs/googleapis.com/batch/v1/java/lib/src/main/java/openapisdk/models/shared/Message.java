package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Message
 * Message details. Describe the attribute that a message should have. Without specified message attributes, no message will be sent by default.
**/
public class Message {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newJobState")
    public MessageNewJobStateEnum newJobState;
    public Message withNewJobState(MessageNewJobStateEnum newJobState) {
        this.newJobState = newJobState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newTaskState")
    public MessageNewTaskStateEnum newTaskState;
    public Message withNewTaskState(MessageNewTaskStateEnum newTaskState) {
        this.newTaskState = newTaskState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public MessageTypeEnum type;
    public Message withType(MessageTypeEnum type) {
        this.type = type;
        return this;
    }
}