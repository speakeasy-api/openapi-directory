package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutNetworksId200ApplicationJsonNetworkRoutes {
    @JsonProperty("destination")
    public String destination;
    public PutNetworksId200ApplicationJsonNetworkRoutes withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonProperty("gateway")
    public String gateway;
    public PutNetworksId200ApplicationJsonNetworkRoutes withGateway(String gateway) {
        this.gateway = gateway;
        return this;
    }
}