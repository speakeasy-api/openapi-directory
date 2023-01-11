package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TcpRouteRouteRule
 * Specifies how to match traffic and how to route traffic when traffic is matched.
**/
public class TcpRouteRouteRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public TcpRouteRouteAction action;
    public TcpRouteRouteRule withAction(TcpRouteRouteAction action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matches")
    public TcpRouteRouteMatch[] matches;
    public TcpRouteRouteRule withMatches(TcpRouteRouteMatch[] matches) {
        this.matches = matches;
        return this;
    }
}