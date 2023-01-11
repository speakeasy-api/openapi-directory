package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VmCreationConfig
 * VM creation configuration message
**/
public class VmCreationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnet")
    public String subnet;
    public VmCreationConfig withSubnet(String subnet) {
        this.subnet = subnet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmMachineType")
    public String vmMachineType;
    public VmCreationConfig withVmMachineType(String vmMachineType) {
        this.vmMachineType = vmMachineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmZone")
    public String vmZone;
    public VmCreationConfig withVmZone(String vmZone) {
        this.vmZone = vmZone;
        return this;
    }
}