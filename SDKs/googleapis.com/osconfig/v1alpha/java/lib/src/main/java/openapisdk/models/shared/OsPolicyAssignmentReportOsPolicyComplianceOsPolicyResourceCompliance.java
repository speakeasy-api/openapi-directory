package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance
 * Compliance data for an OS policy resource.
**/
public class OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complianceState")
    public OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum complianceState;
    public OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance withComplianceState(OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum complianceState) {
        this.complianceState = complianceState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complianceStateReason")
    public String complianceStateReason;
    public OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance withComplianceStateReason(String complianceStateReason) {
        this.complianceStateReason = complianceStateReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configSteps")
    public OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep[] configSteps;
    public OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance withConfigSteps(OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep[] configSteps) {
        this.configSteps = configSteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("execResourceOutput")
    public OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceExecResourceOutput execResourceOutput;
    public OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance withExecResourceOutput(OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceExecResourceOutput execResourceOutput) {
        this.execResourceOutput = execResourceOutput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osPolicyResourceId")
    public String osPolicyResourceId;
    public OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance withOsPolicyResourceId(String osPolicyResourceId) {
        this.osPolicyResourceId = osPolicyResourceId;
        return this;
    }
}