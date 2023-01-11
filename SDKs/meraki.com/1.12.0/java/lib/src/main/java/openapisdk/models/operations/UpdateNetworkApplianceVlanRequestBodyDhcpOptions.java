package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkApplianceVlanRequestBodyDhcpOptions {
    @JsonProperty("code")
    public String code;
    public UpdateNetworkApplianceVlanRequestBodyDhcpOptions withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("type")
    public UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum type;
    public UpdateNetworkApplianceVlanRequestBodyDhcpOptions withType(UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public UpdateNetworkApplianceVlanRequestBodyDhcpOptions withValue(String value) {
        this.value = value;
        return this;
    }
}