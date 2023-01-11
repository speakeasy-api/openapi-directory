package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TlsRouteRouteAction
 * The specifications for routing traffic and applying associated policies.
**/
public class TlsRouteRouteAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinations")
    public TlsRouteRouteDestination[] destinations;
    public TlsRouteRouteAction withDestinations(TlsRouteRouteDestination[] destinations) {
        this.destinations = destinations;
        return this;
    }
}