package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MachineConfig
 * MachineConfig describes the configuration of a machine.
**/
public class MachineConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuCount")
    public Integer cpuCount;
    public MachineConfig withCpuCount(Integer cpuCount) {
        this.cpuCount = cpuCount;
        return this;
    }
}