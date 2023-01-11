package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkSwitchStackRoutingInterfaceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultGateway")
    public String defaultGateway;
    public CreateNetworkSwitchStackRoutingInterfaceRequestBody withDefaultGateway(String defaultGateway) {
        this.defaultGateway = defaultGateway;
        return this;
    }
    @JsonProperty("interfaceIp")
    public String interfaceIp;
    public CreateNetworkSwitchStackRoutingInterfaceRequestBody withInterfaceIp(String interfaceIp) {
        this.interfaceIp = interfaceIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multicastRouting")
    public CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum multicastRouting;
    public CreateNetworkSwitchStackRoutingInterfaceRequestBody withMulticastRouting(CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum multicastRouting) {
        this.multicastRouting = multicastRouting;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateNetworkSwitchStackRoutingInterfaceRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ospfSettings")
    public CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings ospfSettings;
    public CreateNetworkSwitchStackRoutingInterfaceRequestBody withOspfSettings(CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings ospfSettings) {
        this.ospfSettings = ospfSettings;
        return this;
    }
    @JsonProperty("subnet")
    public String subnet;
    public CreateNetworkSwitchStackRoutingInterfaceRequestBody withSubnet(String subnet) {
        this.subnet = subnet;
        return this;
    }
    @JsonProperty("vlanId")
    public Long vlanId;
    public CreateNetworkSwitchStackRoutingInterfaceRequestBody withVlanId(Long vlanId) {
        this.vlanId = vlanId;
        return this;
    }
}