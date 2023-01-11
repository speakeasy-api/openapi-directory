package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3RouteTypesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_types")
    public V3RouteType[] routeTypes;
    public V3RouteTypesResponse withRouteTypes(V3RouteType[] routeTypes) {
        this.routeTypes = routeTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public V3Status status;
    public V3RouteTypesResponse withStatus(V3Status status) {
        this.status = status;
        return this;
    }
}