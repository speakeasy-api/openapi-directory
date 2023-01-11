package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody {
    @JsonProperty("interfaceIp")
    public String interfaceIp;
    public CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody withInterfaceIp(String interfaceIp) {
        this.interfaceIp = interfaceIp;
        return this;
    }
    @JsonProperty("multicastGroup")
    public String multicastGroup;
    public CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody withMulticastGroup(String multicastGroup) {
        this.multicastGroup = multicastGroup;
        return this;
    }
}