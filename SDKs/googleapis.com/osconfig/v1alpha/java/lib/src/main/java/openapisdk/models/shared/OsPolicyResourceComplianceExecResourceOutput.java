package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourceComplianceExecResourceOutput
 * ExecResource specific output.
**/
public class OsPolicyResourceComplianceExecResourceOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforcementOutput")
    public String enforcementOutput;
    public OsPolicyResourceComplianceExecResourceOutput withEnforcementOutput(String enforcementOutput) {
        this.enforcementOutput = enforcementOutput;
        return this;
    }
}