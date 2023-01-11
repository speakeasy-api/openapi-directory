package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VmUtilizationMetrics
 * Utilization metrics values for a single VM.
**/
public class VmUtilizationMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuAveragePercent")
    public Integer cpuAveragePercent;
    public VmUtilizationMetrics withCpuAveragePercent(Integer cpuAveragePercent) {
        this.cpuAveragePercent = cpuAveragePercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuMaxPercent")
    public Integer cpuMaxPercent;
    public VmUtilizationMetrics withCpuMaxPercent(Integer cpuMaxPercent) {
        this.cpuMaxPercent = cpuMaxPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskIoRateAverageKbps")
    public String diskIoRateAverageKbps;
    public VmUtilizationMetrics withDiskIoRateAverageKbps(String diskIoRateAverageKbps) {
        this.diskIoRateAverageKbps = diskIoRateAverageKbps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskIoRateMaxKbps")
    public String diskIoRateMaxKbps;
    public VmUtilizationMetrics withDiskIoRateMaxKbps(String diskIoRateMaxKbps) {
        this.diskIoRateMaxKbps = diskIoRateMaxKbps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryAveragePercent")
    public Integer memoryAveragePercent;
    public VmUtilizationMetrics withMemoryAveragePercent(Integer memoryAveragePercent) {
        this.memoryAveragePercent = memoryAveragePercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryMaxPercent")
    public Integer memoryMaxPercent;
    public VmUtilizationMetrics withMemoryMaxPercent(Integer memoryMaxPercent) {
        this.memoryMaxPercent = memoryMaxPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkThroughputAverageKbps")
    public String networkThroughputAverageKbps;
    public VmUtilizationMetrics withNetworkThroughputAverageKbps(String networkThroughputAverageKbps) {
        this.networkThroughputAverageKbps = networkThroughputAverageKbps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkThroughputMaxKbps")
    public String networkThroughputMaxKbps;
    public VmUtilizationMetrics withNetworkThroughputMaxKbps(String networkThroughputMaxKbps) {
        this.networkThroughputMaxKbps = networkThroughputMaxKbps;
        return this;
    }
}