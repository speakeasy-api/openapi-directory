package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualMachineInput
 * Runtime using Virtual Machine for computing.
**/
public class VirtualMachineInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualMachineConfig")
    public VirtualMachineConfigInput virtualMachineConfig;
    public VirtualMachineInput withVirtualMachineConfig(VirtualMachineConfigInput virtualMachineConfig) {
        this.virtualMachineConfig = virtualMachineConfig;
        return this;
    }
}