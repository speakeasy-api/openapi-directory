package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceExecResourceOutput
 * ExecResource specific output.
**/
public class OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceExecResourceOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforcementOutput")
    public String enforcementOutput;
    public OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceExecResourceOutput withEnforcementOutput(String enforcementOutput) {
        this.enforcementOutput = enforcementOutput;
        return this;
    }
}