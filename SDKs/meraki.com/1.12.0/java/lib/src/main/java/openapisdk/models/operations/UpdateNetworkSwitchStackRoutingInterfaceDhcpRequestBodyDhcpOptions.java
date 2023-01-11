package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions {
    @JsonProperty("code")
    public String code;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("type")
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum type;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions withType(UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions withValue(String value) {
        this.value = value;
        return this;
    }
}