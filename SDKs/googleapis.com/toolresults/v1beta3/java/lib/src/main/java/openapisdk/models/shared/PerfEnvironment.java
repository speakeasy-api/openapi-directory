package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PerfEnvironment
 * Encapsulates performance environment info
**/
public class PerfEnvironment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuInfo")
    public CpuInfo cpuInfo;
    public PerfEnvironment withCpuInfo(CpuInfo cpuInfo) {
        this.cpuInfo = cpuInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryInfo")
    public MemoryInfo memoryInfo;
    public PerfEnvironment withMemoryInfo(MemoryInfo memoryInfo) {
        this.memoryInfo = memoryInfo;
        return this;
    }
}