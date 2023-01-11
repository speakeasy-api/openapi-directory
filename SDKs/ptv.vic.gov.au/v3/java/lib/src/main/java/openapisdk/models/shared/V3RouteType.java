package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3RouteType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_type")
    public Integer routeType;
    public V3RouteType withRouteType(Integer routeType) {
        this.routeType = routeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_type_name")
    public String routeTypeName;
    public V3RouteType withRouteTypeName(String routeTypeName) {
        this.routeTypeName = routeTypeName;
        return this;
    }
}