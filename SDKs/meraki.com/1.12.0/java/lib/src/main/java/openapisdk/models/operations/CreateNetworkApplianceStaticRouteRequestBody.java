package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateNetworkApplianceStaticRouteRequestBody {
    @JsonProperty("gatewayIp")
    public String gatewayIp;
    public CreateNetworkApplianceStaticRouteRequestBody withGatewayIp(String gatewayIp) {
        this.gatewayIp = gatewayIp;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateNetworkApplianceStaticRouteRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("subnet")
    public String subnet;
    public CreateNetworkApplianceStaticRouteRequestBody withSubnet(String subnet) {
        this.subnet = subnet;
        return this;
    }
}