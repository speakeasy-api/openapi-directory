package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GkeNodeConfig
 * Parameters that describe cluster nodes.
**/
public class GkeNodeConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accelerators")
    public GkeNodePoolAcceleratorConfig[] accelerators;
    public GkeNodeConfig withAccelerators(GkeNodePoolAcceleratorConfig[] accelerators) {
        this.accelerators = accelerators;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootDiskKmsKey")
    public String bootDiskKmsKey;
    public GkeNodeConfig withBootDiskKmsKey(String bootDiskKmsKey) {
        this.bootDiskKmsKey = bootDiskKmsKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localSsdCount")
    public Integer localSsdCount;
    public GkeNodeConfig withLocalSsdCount(Integer localSsdCount) {
        this.localSsdCount = localSsdCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;
    public GkeNodeConfig withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minCpuPlatform")
    public String minCpuPlatform;
    public GkeNodeConfig withMinCpuPlatform(String minCpuPlatform) {
        this.minCpuPlatform = minCpuPlatform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preemptible")
    public Boolean preemptible;
    public GkeNodeConfig withPreemptible(Boolean preemptible) {
        this.preemptible = preemptible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spot")
    public Boolean spot;
    public GkeNodeConfig withSpot(Boolean spot) {
        this.spot = spot;
        return this;
    }
}