package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TlsRouteRouteRule
 * Specifies how to match traffic and how to route traffic when traffic is matched.
**/
public class TlsRouteRouteRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public TlsRouteRouteAction action;
    public TlsRouteRouteRule withAction(TlsRouteRouteAction action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matches")
    public TlsRouteRouteMatch[] matches;
    public TlsRouteRouteRule withMatches(TlsRouteRouteMatch[] matches) {
        this.matches = matches;
        return this;
    }
}