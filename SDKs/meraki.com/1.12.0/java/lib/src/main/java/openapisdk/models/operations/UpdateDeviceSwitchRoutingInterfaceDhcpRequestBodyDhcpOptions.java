package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions {
    @JsonProperty("code")
    public String code;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("type")
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum type;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions withType(UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions withValue(String value) {
        this.value = value;
        return this;
    }
}