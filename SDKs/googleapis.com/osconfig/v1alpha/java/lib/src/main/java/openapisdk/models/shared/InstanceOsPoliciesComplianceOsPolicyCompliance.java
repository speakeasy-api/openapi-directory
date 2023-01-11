package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceOsPoliciesComplianceOsPolicyCompliance
 * Compliance data for an OS policy
**/
public class InstanceOsPoliciesComplianceOsPolicyCompliance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osPolicyAssignment")
    public String osPolicyAssignment;
    public InstanceOsPoliciesComplianceOsPolicyCompliance withOsPolicyAssignment(String osPolicyAssignment) {
        this.osPolicyAssignment = osPolicyAssignment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osPolicyId")
    public String osPolicyId;
    public InstanceOsPoliciesComplianceOsPolicyCompliance withOsPolicyId(String osPolicyId) {
        this.osPolicyId = osPolicyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osPolicyResourceCompliances")
    public OsPolicyResourceCompliance[] osPolicyResourceCompliances;
    public InstanceOsPoliciesComplianceOsPolicyCompliance withOsPolicyResourceCompliances(OsPolicyResourceCompliance[] osPolicyResourceCompliances) {
        this.osPolicyResourceCompliances = osPolicyResourceCompliances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum state;
    public InstanceOsPoliciesComplianceOsPolicyCompliance withState(InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum state) {
        this.state = state;
        return this;
    }
}