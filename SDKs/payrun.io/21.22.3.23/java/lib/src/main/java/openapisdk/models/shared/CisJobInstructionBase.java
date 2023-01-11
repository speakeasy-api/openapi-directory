package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CisJobInstructionBase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CisJobInstructionBase")
    public CisJobInstructionBaseCisJobInstructionBase cisJobInstructionBase;
    public CisJobInstructionBase withCisJobInstructionBase(CisJobInstructionBaseCisJobInstructionBase cisJobInstructionBase) {
        this.cisJobInstructionBase = cisJobInstructionBase;
        return this;
    }
}