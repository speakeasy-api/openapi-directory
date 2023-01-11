package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrpcRouteRouteRule
 * Describes how to route traffic.
**/
public class GrpcRouteRouteRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public GrpcRouteRouteAction action;
    public GrpcRouteRouteRule withAction(GrpcRouteRouteAction action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matches")
    public GrpcRouteRouteMatch[] matches;
    public GrpcRouteRouteRule withMatches(GrpcRouteRouteMatch[] matches) {
        this.matches = matches;
        return this;
    }
}