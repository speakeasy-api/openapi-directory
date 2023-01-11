package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyAssignmentReportOsPolicyCompliance
 * Compliance data for an OS policy
**/
public class OsPolicyAssignmentReportOsPolicyCompliance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complianceState")
    public OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum complianceState;
    public OsPolicyAssignmentReportOsPolicyCompliance withComplianceState(OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum complianceState) {
        this.complianceState = complianceState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complianceStateReason")
    public String complianceStateReason;
    public OsPolicyAssignmentReportOsPolicyCompliance withComplianceStateReason(String complianceStateReason) {
        this.complianceStateReason = complianceStateReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osPolicyId")
    public String osPolicyId;
    public OsPolicyAssignmentReportOsPolicyCompliance withOsPolicyId(String osPolicyId) {
        this.osPolicyId = osPolicyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osPolicyResourceCompliances")
    public OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance[] osPolicyResourceCompliances;
    public OsPolicyAssignmentReportOsPolicyCompliance withOsPolicyResourceCompliances(OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance[] osPolicyResourceCompliances) {
        this.osPolicyResourceCompliances = osPolicyResourceCompliances;
        return this;
    }
}