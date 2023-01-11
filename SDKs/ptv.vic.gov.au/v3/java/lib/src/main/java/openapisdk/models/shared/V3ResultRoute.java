package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3ResultRoute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_gtfs_id")
    public String routeGtfsId;
    public V3ResultRoute withRouteGtfsId(String routeGtfsId) {
        this.routeGtfsId = routeGtfsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_id")
    public Integer routeId;
    public V3ResultRoute withRouteId(Integer routeId) {
        this.routeId = routeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_name")
    public String routeName;
    public V3ResultRoute withRouteName(String routeName) {
        this.routeName = routeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_number")
    public String routeNumber;
    public V3ResultRoute withRouteNumber(String routeNumber) {
        this.routeNumber = routeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_service_status")
    public V3RouteServiceStatus routeServiceStatus;
    public V3ResultRoute withRouteServiceStatus(V3RouteServiceStatus routeServiceStatus) {
        this.routeServiceStatus = routeServiceStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_type")
    public Integer routeType;
    public V3ResultRoute withRouteType(Integer routeType) {
        this.routeType = routeType;
        return this;
    }
}