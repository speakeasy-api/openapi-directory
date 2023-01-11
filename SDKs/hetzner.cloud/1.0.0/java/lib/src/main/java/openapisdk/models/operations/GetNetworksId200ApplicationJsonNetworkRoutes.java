package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNetworksId200ApplicationJsonNetworkRoutes {
    @JsonProperty("destination")
    public String destination;
    public GetNetworksId200ApplicationJsonNetworkRoutes withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonProperty("gateway")
    public String gateway;
    public GetNetworksId200ApplicationJsonNetworkRoutes withGateway(String gateway) {
        this.gateway = gateway;
        return this;
    }
}