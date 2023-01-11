package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3DisruptionRoute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public V3DisruptionDirection direction;
    public V3DisruptionRoute withDirection(V3DisruptionDirection direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_gtfs_id")
    public String routeGtfsId;
    public V3DisruptionRoute withRouteGtfsId(String routeGtfsId) {
        this.routeGtfsId = routeGtfsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_id")
    public Integer routeId;
    public V3DisruptionRoute withRouteId(Integer routeId) {
        this.routeId = routeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_name")
    public String routeName;
    public V3DisruptionRoute withRouteName(String routeName) {
        this.routeName = routeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_number")
    public String routeNumber;
    public V3DisruptionRoute withRouteNumber(String routeNumber) {
        this.routeNumber = routeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_type")
    public Integer routeType;
    public V3DisruptionRoute withRouteType(Integer routeType) {
        this.routeType = routeType;
        return this;
    }
}