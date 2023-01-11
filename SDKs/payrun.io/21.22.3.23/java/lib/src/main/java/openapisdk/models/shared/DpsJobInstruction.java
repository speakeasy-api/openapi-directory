package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DpsJobInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DpsJobInstruction")
    public DpsJobInstructionDpsJobInstruction dpsJobInstruction;
    public DpsJobInstruction withDpsJobInstruction(DpsJobInstructionDpsJobInstruction dpsJobInstruction) {
        this.dpsJobInstruction = dpsJobInstruction;
        return this;
    }
}