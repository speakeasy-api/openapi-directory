package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VmwareVmDetailsInput
 * VmwareVmDetails describes a VM in vCenter.
**/
public class VmwareVmDetailsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committedStorage")
    public String committedStorage;
    public VmwareVmDetailsInput withCommittedStorage(String committedStorage) {
        this.committedStorage = committedStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committedStorageMb")
    public String committedStorageMb;
    public VmwareVmDetailsInput withCommittedStorageMb(String committedStorageMb) {
        this.committedStorageMb = committedStorageMb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuCount")
    public Integer cpuCount;
    public VmwareVmDetailsInput withCpuCount(Integer cpuCount) {
        this.cpuCount = cpuCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datacenterDescription")
    public String datacenterDescription;
    public VmwareVmDetailsInput withDatacenterDescription(String datacenterDescription) {
        this.datacenterDescription = datacenterDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datacenterId")
    public String datacenterId;
    public VmwareVmDetailsInput withDatacenterId(String datacenterId) {
        this.datacenterId = datacenterId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskCount")
    public Integer diskCount;
    public VmwareVmDetailsInput withDiskCount(Integer diskCount) {
        this.diskCount = diskCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public VmwareVmDetailsInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestDescription")
    public String guestDescription;
    public VmwareVmDetailsInput withGuestDescription(String guestDescription) {
        this.guestDescription = guestDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryMb")
    public Integer memoryMb;
    public VmwareVmDetailsInput withMemoryMb(Integer memoryMb) {
        this.memoryMb = memoryMb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("powerState")
    public VmwareVmDetailsPowerStateEnum powerState;
    public VmwareVmDetailsInput withPowerState(VmwareVmDetailsPowerStateEnum powerState) {
        this.powerState = powerState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public VmwareVmDetailsInput withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmId")
    public String vmId;
    public VmwareVmDetailsInput withVmId(String vmId) {
        this.vmId = vmId;
        return this;
    }
}