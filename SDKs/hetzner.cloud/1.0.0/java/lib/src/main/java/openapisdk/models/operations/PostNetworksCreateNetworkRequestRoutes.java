package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksCreateNetworkRequestRoutes {
    @JsonProperty("destination")
    public String destination;
    public PostNetworksCreateNetworkRequestRoutes withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonProperty("gateway")
    public String gateway;
    public PostNetworksCreateNetworkRequestRoutes withGateway(String gateway) {
        this.gateway = gateway;
        return this;
    }
}