package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TlsRouteRouteMatch
 * RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "AND"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic.
**/
public class TlsRouteRouteMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alpn")
    public String[] alpn;
    public TlsRouteRouteMatch withAlpn(String[] alpn) {
        this.alpn = alpn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sniHost")
    public String[] sniHost;
    public TlsRouteRouteMatch withSniHost(String[] sniHost) {
        this.sniHost = sniHost;
        return this;
    }
}