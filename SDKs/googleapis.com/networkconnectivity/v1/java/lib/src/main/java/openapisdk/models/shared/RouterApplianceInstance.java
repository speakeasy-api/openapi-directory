package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RouterApplianceInstance
 * A router appliance instance is a Compute Engine virtual machine (VM) instance that acts as a BGP speaker. A router appliance instance is specified by the URI of the VM and the internal IP address of one of the VM's network interfaces.
**/
public class RouterApplianceInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddress")
    public String ipAddress;
    public RouterApplianceInstance withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualMachine")
    public String virtualMachine;
    public RouterApplianceInstance withVirtualMachine(String virtualMachine) {
        this.virtualMachine = virtualMachine;
        return this;
    }
}