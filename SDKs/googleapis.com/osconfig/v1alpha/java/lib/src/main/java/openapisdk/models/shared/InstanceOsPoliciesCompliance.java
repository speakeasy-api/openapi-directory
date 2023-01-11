package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceOsPoliciesCompliance
 * This API resource represents the OS policies compliance data for a Compute Engine virtual machine (VM) instance at a given point in time. A Compute Engine VM can have multiple OS policy assignments, and each assignment can have multiple OS policies. As a result, multiple OS policies could be applied to a single VM. You can use this API resource to determine both the compliance state of your VM as well as the compliance state of an individual OS policy. For more information, see [View compliance](https://cloud.google.com/compute/docs/os-configuration-management/view-compliance).
**/
public class InstanceOsPoliciesCompliance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detailedState")
    public String detailedState;
    public InstanceOsPoliciesCompliance withDetailedState(String detailedState) {
        this.detailedState = detailedState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detailedStateReason")
    public String detailedStateReason;
    public InstanceOsPoliciesCompliance withDetailedStateReason(String detailedStateReason) {
        this.detailedStateReason = detailedStateReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance")
    public String instance;
    public InstanceOsPoliciesCompliance withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastComplianceCheckTime")
    public String lastComplianceCheckTime;
    public InstanceOsPoliciesCompliance withLastComplianceCheckTime(String lastComplianceCheckTime) {
        this.lastComplianceCheckTime = lastComplianceCheckTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastComplianceRunId")
    public String lastComplianceRunId;
    public InstanceOsPoliciesCompliance withLastComplianceRunId(String lastComplianceRunId) {
        this.lastComplianceRunId = lastComplianceRunId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public InstanceOsPoliciesCompliance withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osPolicyCompliances")
    public InstanceOsPoliciesComplianceOsPolicyCompliance[] osPolicyCompliances;
    public InstanceOsPoliciesCompliance withOsPolicyCompliances(InstanceOsPoliciesComplianceOsPolicyCompliance[] osPolicyCompliances) {
        this.osPolicyCompliances = osPolicyCompliances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public InstanceOsPoliciesComplianceStateEnum state;
    public InstanceOsPoliciesCompliance withState(InstanceOsPoliciesComplianceStateEnum state) {
        this.state = state;
        return this;
    }
}