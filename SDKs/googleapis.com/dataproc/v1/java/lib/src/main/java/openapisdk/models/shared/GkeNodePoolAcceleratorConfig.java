package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GkeNodePoolAcceleratorConfig
 * A GkeNodeConfigAcceleratorConfig represents a Hardware Accelerator request for a node pool.
**/
public class GkeNodePoolAcceleratorConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceleratorCount")
    public String acceleratorCount;
    public GkeNodePoolAcceleratorConfig withAcceleratorCount(String acceleratorCount) {
        this.acceleratorCount = acceleratorCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceleratorType")
    public String acceleratorType;
    public GkeNodePoolAcceleratorConfig withAcceleratorType(String acceleratorType) {
        this.acceleratorType = acceleratorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gpuPartitionSize")
    public String gpuPartitionSize;
    public GkeNodePoolAcceleratorConfig withGpuPartitionSize(String gpuPartitionSize) {
        this.gpuPartitionSize = gpuPartitionSize;
        return this;
    }
}