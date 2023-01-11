package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomMachineType
 * Specification of a custom machine type.
**/
public class CustomMachineType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineSeries")
    public String machineSeries;
    public CustomMachineType withMachineSeries(String machineSeries) {
        this.machineSeries = machineSeries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memorySizeGb")
    public Double memorySizeGb;
    public CustomMachineType withMemorySizeGb(Double memorySizeGb) {
        this.memorySizeGb = memorySizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualCpuCount")
    public String virtualCpuCount;
    public CustomMachineType withVirtualCpuCount(String virtualCpuCount) {
        this.virtualCpuCount = virtualCpuCount;
        return this;
    }
}