package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody {
    @JsonProperty("interfaceIp")
    public String interfaceIp;
    public UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody withInterfaceIp(String interfaceIp) {
        this.interfaceIp = interfaceIp;
        return this;
    }
    @JsonProperty("multicastGroup")
    public String multicastGroup;
    public UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody withMulticastGroup(String multicastGroup) {
        this.multicastGroup = multicastGroup;
        return this;
    }
}