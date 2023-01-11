package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuntimeInput
 * The definition of a Runtime for a managed notebook instance.
**/
public class RuntimeInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessConfig")
    public RuntimeAccessConfigInput accessConfig;
    public RuntimeInput withAccessConfig(RuntimeAccessConfigInput accessConfig) {
        this.accessConfig = accessConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softwareConfig")
    public RuntimeSoftwareConfigInput softwareConfig;
    public RuntimeInput withSoftwareConfig(RuntimeSoftwareConfigInput softwareConfig) {
        this.softwareConfig = softwareConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualMachine")
    public VirtualMachineInput virtualMachine;
    public RuntimeInput withVirtualMachine(VirtualMachineInput virtualMachine) {
        this.virtualMachine = virtualMachine;
        return this;
    }
}