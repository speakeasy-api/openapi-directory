package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchStackRoutingInterfaceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interfaceIp")
    public String interfaceIp;
    public UpdateNetworkSwitchStackRoutingInterfaceRequestBody withInterfaceIp(String interfaceIp) {
        this.interfaceIp = interfaceIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multicastRouting")
    public UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum multicastRouting;
    public UpdateNetworkSwitchStackRoutingInterfaceRequestBody withMulticastRouting(UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum multicastRouting) {
        this.multicastRouting = multicastRouting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkSwitchStackRoutingInterfaceRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ospfSettings")
    public UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings ospfSettings;
    public UpdateNetworkSwitchStackRoutingInterfaceRequestBody withOspfSettings(UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings ospfSettings) {
        this.ospfSettings = ospfSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnet")
    public String subnet;
    public UpdateNetworkSwitchStackRoutingInterfaceRequestBody withSubnet(String subnet) {
        this.subnet = subnet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlanId")
    public Long vlanId;
    public UpdateNetworkSwitchStackRoutingInterfaceRequestBody withVlanId(Long vlanId) {
        this.vlanId = vlanId;
        return this;
    }
}