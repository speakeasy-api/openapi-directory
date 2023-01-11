package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TlsRouteRouteDestination
 * Describe the destination for traffic to be routed to.
**/
public class TlsRouteRouteDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public TlsRouteRouteDestination withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Integer weight;
    public TlsRouteRouteDestination withWeight(Integer weight) {
        this.weight = weight;
        return this;
    }
}