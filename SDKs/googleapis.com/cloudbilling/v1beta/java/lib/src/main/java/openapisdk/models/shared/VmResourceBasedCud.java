package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VmResourceBasedCud
 * Specifies a resource-based committed use discount (CUD).
**/
public class VmResourceBasedCud {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestAccelerator")
    public GuestAccelerator guestAccelerator;
    public VmResourceBasedCud withGuestAccelerator(GuestAccelerator guestAccelerator) {
        this.guestAccelerator = guestAccelerator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineSeries")
    public String machineSeries;
    public VmResourceBasedCud withMachineSeries(String machineSeries) {
        this.machineSeries = machineSeries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memorySizeGb")
    public Double memorySizeGb;
    public VmResourceBasedCud withMemorySizeGb(Double memorySizeGb) {
        this.memorySizeGb = memorySizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan")
    public VmResourceBasedCudPlanEnum plan;
    public VmResourceBasedCud withPlan(VmResourceBasedCudPlanEnum plan) {
        this.plan = plan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public VmResourceBasedCud withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualCpuCount")
    public String virtualCpuCount;
    public VmResourceBasedCud withVirtualCpuCount(String virtualCpuCount) {
        this.virtualCpuCount = virtualCpuCount;
        return this;
    }
}