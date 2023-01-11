package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComputeVmWorkload
 * Specificies usage of a set of identical compute VM instances.
**/
public class ComputeVmWorkload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableConfidentialCompute")
    public Boolean enableConfidentialCompute;
    public ComputeVmWorkload withEnableConfidentialCompute(Boolean enableConfidentialCompute) {
        this.enableConfidentialCompute = enableConfidentialCompute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestAccelerator")
    public GuestAccelerator guestAccelerator;
    public ComputeVmWorkload withGuestAccelerator(GuestAccelerator guestAccelerator) {
        this.guestAccelerator = guestAccelerator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instancesRunning")
    public Usage instancesRunning;
    public ComputeVmWorkload withInstancesRunning(Usage instancesRunning) {
        this.instancesRunning = instancesRunning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licenses")
    public String[] licenses;
    public ComputeVmWorkload withLicenses(String[] licenses) {
        this.licenses = licenses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public MachineType machineType;
    public ComputeVmWorkload withMachineType(MachineType machineType) {
        this.machineType = machineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persistentDisks")
    public PersistentDisk[] persistentDisks;
    public ComputeVmWorkload withPersistentDisks(PersistentDisk[] persistentDisks) {
        this.persistentDisks = persistentDisks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preemptible")
    public Boolean preemptible;
    public ComputeVmWorkload withPreemptible(Boolean preemptible) {
        this.preemptible = preemptible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public ComputeVmWorkload withRegion(String region) {
        this.region = region;
        return this;
    }
}