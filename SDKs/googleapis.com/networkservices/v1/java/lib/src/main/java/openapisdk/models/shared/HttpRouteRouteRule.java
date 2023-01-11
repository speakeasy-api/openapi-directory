package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRouteRouteRule
 * Specifies how to match traffic and how to route traffic when traffic is matched.
**/
public class HttpRouteRouteRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public HttpRouteRouteAction action;
    public HttpRouteRouteRule withAction(HttpRouteRouteAction action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matches")
    public HttpRouteRouteMatch[] matches;
    public HttpRouteRouteRule withMatches(HttpRouteRouteMatch[] matches) {
        this.matches = matches;
        return this;
    }
}