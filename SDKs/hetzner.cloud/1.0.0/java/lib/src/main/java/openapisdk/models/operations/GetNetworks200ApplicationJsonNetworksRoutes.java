package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNetworks200ApplicationJsonNetworksRoutes {
    @JsonProperty("destination")
    public String destination;
    public GetNetworks200ApplicationJsonNetworksRoutes withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonProperty("gateway")
    public String gateway;
    public GetNetworks200ApplicationJsonNetworksRoutes withGateway(String gateway) {
        this.gateway = gateway;
        return this;
    }
}