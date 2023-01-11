package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDeviceSwitchRoutingInterfaceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interfaceIp")
    public String interfaceIp;
    public UpdateDeviceSwitchRoutingInterfaceRequestBody withInterfaceIp(String interfaceIp) {
        this.interfaceIp = interfaceIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multicastRouting")
    public UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum multicastRouting;
    public UpdateDeviceSwitchRoutingInterfaceRequestBody withMulticastRouting(UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum multicastRouting) {
        this.multicastRouting = multicastRouting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateDeviceSwitchRoutingInterfaceRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ospfSettings")
    public UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings ospfSettings;
    public UpdateDeviceSwitchRoutingInterfaceRequestBody withOspfSettings(UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings ospfSettings) {
        this.ospfSettings = ospfSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnet")
    public String subnet;
    public UpdateDeviceSwitchRoutingInterfaceRequestBody withSubnet(String subnet) {
        this.subnet = subnet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlanId")
    public Long vlanId;
    public UpdateDeviceSwitchRoutingInterfaceRequestBody withVlanId(Long vlanId) {
        this.vlanId = vlanId;
        return this;
    }
}