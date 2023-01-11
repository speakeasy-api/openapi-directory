package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DpsJobInstructionDpsJobInstructionMessage
 * The dps job instructions' messages to process
**/
public class DpsJobInstructionDpsJobInstructionMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public Object[] message;
    public DpsJobInstructionDpsJobInstructionMessage withMessage(Object[] message) {
        this.message = message;
        return this;
    }
}