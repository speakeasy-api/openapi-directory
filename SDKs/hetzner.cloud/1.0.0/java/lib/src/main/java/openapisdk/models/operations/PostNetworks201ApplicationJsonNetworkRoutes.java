package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworks201ApplicationJsonNetworkRoutes {
    @JsonProperty("destination")
    public String destination;
    public PostNetworks201ApplicationJsonNetworkRoutes withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonProperty("gateway")
    public String gateway;
    public PostNetworks201ApplicationJsonNetworkRoutes withGateway(String gateway) {
        this.gateway = gateway;
        return this;
    }
}