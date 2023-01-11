package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualMachine
 * Runtime using Virtual Machine for computing.
**/
public class VirtualMachine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceId")
    public String instanceId;
    public VirtualMachine withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceName")
    public String instanceName;
    public VirtualMachine withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualMachineConfig")
    public VirtualMachineConfig virtualMachineConfig;
    public VirtualMachine withVirtualMachineConfig(VirtualMachineConfig virtualMachineConfig) {
        this.virtualMachineConfig = virtualMachineConfig;
        return this;
    }
}