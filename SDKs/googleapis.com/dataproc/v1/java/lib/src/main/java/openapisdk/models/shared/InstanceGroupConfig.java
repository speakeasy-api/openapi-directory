package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceGroupConfig
 * The config settings for Compute Engine resources in an instance group, such as a master or worker group.
**/
public class InstanceGroupConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accelerators")
    public AcceleratorConfig[] accelerators;
    public InstanceGroupConfig withAccelerators(AcceleratorConfig[] accelerators) {
        this.accelerators = accelerators;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskConfig")
    public DiskConfig diskConfig;
    public InstanceGroupConfig withDiskConfig(DiskConfig diskConfig) {
        this.diskConfig = diskConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUri")
    public String imageUri;
    public InstanceGroupConfig withImageUri(String imageUri) {
        this.imageUri = imageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceNames")
    public String[] instanceNames;
    public InstanceGroupConfig withInstanceNames(String[] instanceNames) {
        this.instanceNames = instanceNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceReferences")
    public InstanceReference[] instanceReferences;
    public InstanceGroupConfig withInstanceReferences(InstanceReference[] instanceReferences) {
        this.instanceReferences = instanceReferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPreemptible")
    public Boolean isPreemptible;
    public InstanceGroupConfig withIsPreemptible(Boolean isPreemptible) {
        this.isPreemptible = isPreemptible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineTypeUri")
    public String machineTypeUri;
    public InstanceGroupConfig withMachineTypeUri(String machineTypeUri) {
        this.machineTypeUri = machineTypeUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedGroupConfig")
    public ManagedGroupConfig managedGroupConfig;
    public InstanceGroupConfig withManagedGroupConfig(ManagedGroupConfig managedGroupConfig) {
        this.managedGroupConfig = managedGroupConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minCpuPlatform")
    public String minCpuPlatform;
    public InstanceGroupConfig withMinCpuPlatform(String minCpuPlatform) {
        this.minCpuPlatform = minCpuPlatform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numInstances")
    public Integer numInstances;
    public InstanceGroupConfig withNumInstances(Integer numInstances) {
        this.numInstances = numInstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preemptibility")
    public InstanceGroupConfigPreemptibilityEnum preemptibility;
    public InstanceGroupConfig withPreemptibility(InstanceGroupConfigPreemptibilityEnum preemptibility) {
        this.preemptibility = preemptibility;
        return this;
    }
}