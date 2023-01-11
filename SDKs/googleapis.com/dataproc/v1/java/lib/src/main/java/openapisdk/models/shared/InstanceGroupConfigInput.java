package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceGroupConfigInput
 * The config settings for Compute Engine resources in an instance group, such as a master or worker group.
**/
public class InstanceGroupConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accelerators")
    public AcceleratorConfig[] accelerators;
    public InstanceGroupConfigInput withAccelerators(AcceleratorConfig[] accelerators) {
        this.accelerators = accelerators;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskConfig")
    public DiskConfig diskConfig;
    public InstanceGroupConfigInput withDiskConfig(DiskConfig diskConfig) {
        this.diskConfig = diskConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUri")
    public String imageUri;
    public InstanceGroupConfigInput withImageUri(String imageUri) {
        this.imageUri = imageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineTypeUri")
    public String machineTypeUri;
    public InstanceGroupConfigInput withMachineTypeUri(String machineTypeUri) {
        this.machineTypeUri = machineTypeUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minCpuPlatform")
    public String minCpuPlatform;
    public InstanceGroupConfigInput withMinCpuPlatform(String minCpuPlatform) {
        this.minCpuPlatform = minCpuPlatform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numInstances")
    public Integer numInstances;
    public InstanceGroupConfigInput withNumInstances(Integer numInstances) {
        this.numInstances = numInstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preemptibility")
    public InstanceGroupConfigPreemptibilityEnum preemptibility;
    public InstanceGroupConfigInput withPreemptibility(InstanceGroupConfigPreemptibilityEnum preemptibility) {
        this.preemptibility = preemptibility;
        return this;
    }
}