package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ThirdPartyJobInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThirdPartyJobInstruction")
    public ThirdPartyJobInstructionThirdPartyJobInstruction thirdPartyJobInstruction;
    public ThirdPartyJobInstruction withThirdPartyJobInstruction(ThirdPartyJobInstructionThirdPartyJobInstruction thirdPartyJobInstruction) {
        this.thirdPartyJobInstruction = thirdPartyJobInstruction;
        return this;
    }
}