package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRouteRequestMirrorPolicy
 * Specifies the policy on how requests are shadowed to a separate mirrored destination service. The proxy does not wait for responses from the shadow service. Prior to sending traffic to the shadow service, the host/authority header is suffixed with -shadow.
**/
public class HttpRouteRequestMirrorPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public HttpRouteDestination destination;
    public HttpRouteRequestMirrorPolicy withDestination(HttpRouteDestination destination) {
        this.destination = destination;
        return this;
    }
}