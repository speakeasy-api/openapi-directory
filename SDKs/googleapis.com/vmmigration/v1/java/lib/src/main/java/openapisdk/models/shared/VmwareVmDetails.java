package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VmwareVmDetails
 * VmwareVmDetails describes a VM in vCenter.
**/
public class VmwareVmDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootOption")
    public VmwareVmDetailsBootOptionEnum bootOption;
    public VmwareVmDetails withBootOption(VmwareVmDetailsBootOptionEnum bootOption) {
        this.bootOption = bootOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committedStorageMb")
    public String committedStorageMb;
    public VmwareVmDetails withCommittedStorageMb(String committedStorageMb) {
        this.committedStorageMb = committedStorageMb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuCount")
    public Integer cpuCount;
    public VmwareVmDetails withCpuCount(Integer cpuCount) {
        this.cpuCount = cpuCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datacenterDescription")
    public String datacenterDescription;
    public VmwareVmDetails withDatacenterDescription(String datacenterDescription) {
        this.datacenterDescription = datacenterDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datacenterId")
    public String datacenterId;
    public VmwareVmDetails withDatacenterId(String datacenterId) {
        this.datacenterId = datacenterId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskCount")
    public Integer diskCount;
    public VmwareVmDetails withDiskCount(Integer diskCount) {
        this.diskCount = diskCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public VmwareVmDetails withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestDescription")
    public String guestDescription;
    public VmwareVmDetails withGuestDescription(String guestDescription) {
        this.guestDescription = guestDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryMb")
    public Integer memoryMb;
    public VmwareVmDetails withMemoryMb(Integer memoryMb) {
        this.memoryMb = memoryMb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("powerState")
    public VmwareVmDetailsPowerStateEnum powerState;
    public VmwareVmDetails withPowerState(VmwareVmDetailsPowerStateEnum powerState) {
        this.powerState = powerState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public VmwareVmDetails withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmId")
    public String vmId;
    public VmwareVmDetails withVmId(String vmId) {
        this.vmId = vmId;
        return this;
    }
}