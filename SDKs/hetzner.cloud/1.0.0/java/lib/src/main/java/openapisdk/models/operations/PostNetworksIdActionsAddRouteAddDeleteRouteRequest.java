package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsAddRouteAddDeleteRouteRequest {
    @JsonProperty("destination")
    public String destination;
    public PostNetworksIdActionsAddRouteAddDeleteRouteRequest withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonProperty("gateway")
    public String gateway;
    public PostNetworksIdActionsAddRouteAddDeleteRouteRequest withGateway(String gateway) {
        this.gateway = gateway;
        return this;
    }
}