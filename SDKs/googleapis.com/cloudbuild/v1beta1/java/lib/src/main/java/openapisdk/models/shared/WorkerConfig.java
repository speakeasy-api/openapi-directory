package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkerConfig
 * Defines the configuration to be used for creating workers in the pool.
**/
public class WorkerConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskSizeGb")
    public String diskSizeGb;
    public WorkerConfig withDiskSizeGb(String diskSizeGb) {
        this.diskSizeGb = diskSizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;
    public WorkerConfig withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noExternalIp")
    public Boolean noExternalIp;
    public WorkerConfig withNoExternalIp(Boolean noExternalIp) {
        this.noExternalIp = noExternalIp;
        return this;
    }
}