package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VmUtilizationInfoInput
 * Utilization information of a single VM.
**/
public class VmUtilizationInfoInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utilization")
    public VmUtilizationMetrics utilization;
    public VmUtilizationInfoInput withUtilization(VmUtilizationMetrics utilization) {
        this.utilization = utilization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmId")
    public String vmId;
    public VmUtilizationInfoInput withVmId(String vmId) {
        this.vmId = vmId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmwareVmDetails")
    public VmwareVmDetailsInput vmwareVmDetails;
    public VmUtilizationInfoInput withVmwareVmDetails(VmwareVmDetailsInput vmwareVmDetails) {
        this.vmwareVmDetails = vmwareVmDetails;
        return this;
    }
}