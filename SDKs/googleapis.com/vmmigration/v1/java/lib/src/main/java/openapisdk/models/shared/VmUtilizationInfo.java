package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VmUtilizationInfo
 * Utilization information of a single VM.
**/
public class VmUtilizationInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utilization")
    public VmUtilizationMetrics utilization;
    public VmUtilizationInfo withUtilization(VmUtilizationMetrics utilization) {
        this.utilization = utilization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmId")
    public String vmId;
    public VmUtilizationInfo withVmId(String vmId) {
        this.vmId = vmId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmwareVmDetails")
    public VmwareVmDetails vmwareVmDetails;
    public VmUtilizationInfo withVmwareVmDetails(VmwareVmDetails vmwareVmDetails) {
        this.vmwareVmDetails = vmwareVmDetails;
        return this;
    }
}