package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CisInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CisInstruction")
    public CisInstructionCisInstruction cisInstruction;
    public CisInstruction withCisInstruction(CisInstructionCisInstruction cisInstruction) {
        this.cisInstruction = cisInstruction;
        return this;
    }
}