package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest {
    @JsonProperty("destination")
    public String destination;
    public PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonProperty("gateway")
    public String gateway;
    public PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest withGateway(String gateway) {
        this.gateway = gateway;
        return this;
    }
}