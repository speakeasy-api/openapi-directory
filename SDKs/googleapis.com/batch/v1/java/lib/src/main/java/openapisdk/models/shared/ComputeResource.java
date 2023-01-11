package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComputeResource
 * Compute resource requirements
**/
public class ComputeResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootDiskMib")
    public String bootDiskMib;
    public ComputeResource withBootDiskMib(String bootDiskMib) {
        this.bootDiskMib = bootDiskMib;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuMilli")
    public String cpuMilli;
    public ComputeResource withCpuMilli(String cpuMilli) {
        this.cpuMilli = cpuMilli;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryMib")
    public String memoryMib;
    public ComputeResource withMemoryMib(String memoryMib) {
        this.memoryMib = memoryMib;
        return this;
    }
}