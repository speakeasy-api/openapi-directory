package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TcpRouteRouteMatch
 * RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic.
**/
public class TcpRouteRouteMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public TcpRouteRouteMatch withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public String port;
    public TcpRouteRouteMatch withPort(String port) {
        this.port = port;
        return this;
    }
}