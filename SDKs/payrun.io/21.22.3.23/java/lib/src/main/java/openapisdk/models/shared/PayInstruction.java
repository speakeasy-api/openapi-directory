package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayInstruction")
    public PayInstructionPayInstruction payInstruction;
    public PayInstruction withPayInstruction(PayInstructionPayInstruction payInstruction) {
        this.payInstruction = payInstruction;
        return this;
    }
}