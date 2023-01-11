package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDeviceSwitchRoutingInterfaceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultGateway")
    public String defaultGateway;
    public CreateDeviceSwitchRoutingInterfaceRequestBody withDefaultGateway(String defaultGateway) {
        this.defaultGateway = defaultGateway;
        return this;
    }
    @JsonProperty("interfaceIp")
    public String interfaceIp;
    public CreateDeviceSwitchRoutingInterfaceRequestBody withInterfaceIp(String interfaceIp) {
        this.interfaceIp = interfaceIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multicastRouting")
    public CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum multicastRouting;
    public CreateDeviceSwitchRoutingInterfaceRequestBody withMulticastRouting(CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum multicastRouting) {
        this.multicastRouting = multicastRouting;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateDeviceSwitchRoutingInterfaceRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ospfSettings")
    public CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings ospfSettings;
    public CreateDeviceSwitchRoutingInterfaceRequestBody withOspfSettings(CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings ospfSettings) {
        this.ospfSettings = ospfSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnet")
    public String subnet;
    public CreateDeviceSwitchRoutingInterfaceRequestBody withSubnet(String subnet) {
        this.subnet = subnet;
        return this;
    }
    @JsonProperty("vlanId")
    public Long vlanId;
    public CreateDeviceSwitchRoutingInterfaceRequestBody withVlanId(Long vlanId) {
        this.vlanId = vlanId;
        return this;
    }
}