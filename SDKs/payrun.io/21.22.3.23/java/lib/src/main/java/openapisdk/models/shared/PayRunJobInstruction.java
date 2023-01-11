package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayRunJobInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayRunJobInstruction")
    public PayRunJobInstructionPayRunJobInstruction payRunJobInstruction;
    public PayRunJobInstruction withPayRunJobInstruction(PayRunJobInstructionPayRunJobInstruction payRunJobInstruction) {
        this.payRunJobInstruction = payRunJobInstruction;
        return this;
    }
}