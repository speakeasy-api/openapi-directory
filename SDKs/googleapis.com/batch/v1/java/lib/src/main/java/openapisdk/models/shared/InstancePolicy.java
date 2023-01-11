package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstancePolicy
 * InstancePolicy describes an instance type and resources attached to each VM created by this InstancePolicy.
**/
public class InstancePolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accelerators")
    public Accelerator[] accelerators;
    public InstancePolicy withAccelerators(Accelerator[] accelerators) {
        this.accelerators = accelerators;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disks")
    public AttachedDisk[] disks;
    public InstancePolicy withDisks(AttachedDisk[] disks) {
        this.disks = disks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;
    public InstancePolicy withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minCpuPlatform")
    public String minCpuPlatform;
    public InstancePolicy withMinCpuPlatform(String minCpuPlatform) {
        this.minCpuPlatform = minCpuPlatform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisioningModel")
    public InstancePolicyProvisioningModelEnum provisioningModel;
    public InstancePolicy withProvisioningModel(InstancePolicyProvisioningModelEnum provisioningModel) {
        this.provisioningModel = provisioningModel;
        return this;
    }
}