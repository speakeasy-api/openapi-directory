package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RtiJobInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RtiJobInstruction")
    public RtiJobInstructionRtiJobInstruction rtiJobInstruction;
    public RtiJobInstruction withRtiJobInstruction(RtiJobInstructionRtiJobInstruction rtiJobInstruction) {
        this.rtiJobInstruction = rtiJobInstruction;
        return this;
    }
}