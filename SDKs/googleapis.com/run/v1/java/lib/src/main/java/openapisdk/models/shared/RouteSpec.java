package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RouteSpec
 * RouteSpec holds the desired state of the Route (from the client).
**/
public class RouteSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traffic")
    public TrafficTarget[] traffic;
    public RouteSpec withTraffic(TrafficTarget[] traffic) {
        this.traffic = traffic;
        return this;
    }
}