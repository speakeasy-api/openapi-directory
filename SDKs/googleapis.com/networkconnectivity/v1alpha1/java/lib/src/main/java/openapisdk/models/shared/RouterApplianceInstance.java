package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RouterApplianceInstance
 * RouterAppliance represents a Router appliance which is specified by a VM URI and a NIC address.
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
    @JsonProperty("networkInterface")
    public String networkInterface;
    public RouterApplianceInstance withNetworkInterface(String networkInterface) {
        this.networkInterface = networkInterface;
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