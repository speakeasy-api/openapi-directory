package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrpcRouteRouteMatch
 * Criteria for matching traffic. A RouteMatch will be considered to match when all supplied fields match.
**/
public class GrpcRouteRouteMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public GrpcRouteHeaderMatch[] headers;
    public GrpcRouteRouteMatch withHeaders(GrpcRouteHeaderMatch[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public GrpcRouteMethodMatch method;
    public GrpcRouteRouteMatch withMethod(GrpcRouteMethodMatch method) {
        this.method = method;
        return this;
    }
}