package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TcpRouteRouteAction
 * The specifications for routing traffic and applying associated policies.
**/
public class TcpRouteRouteAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinations")
    public TcpRouteRouteDestination[] destinations;
    public TcpRouteRouteAction withDestinations(TcpRouteRouteDestination[] destinations) {
        this.destinations = destinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalDestination")
    public Boolean originalDestination;
    public TcpRouteRouteAction withOriginalDestination(Boolean originalDestination) {
        this.originalDestination = originalDestination;
        return this;
    }
}