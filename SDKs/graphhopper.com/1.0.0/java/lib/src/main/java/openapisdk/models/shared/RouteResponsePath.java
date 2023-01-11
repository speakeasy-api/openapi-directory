package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RouteResponsePath {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ascend")
    public Double ascend;
    public RouteResponsePath withAscend(Double ascend) {
        this.ascend = ascend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bbox")
    public Double[] bbox;
    public RouteResponsePath withBbox(Double[] bbox) {
        this.bbox = bbox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("descend")
    public Double descend;
    public RouteResponsePath withDescend(Double descend) {
        this.descend = descend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public java.util.Map<String, Object> details;
    public RouteResponsePath withDetails(java.util.Map<String, Object> details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distance")
    public Double distance;
    public RouteResponsePath withDistance(Double distance) {
        this.distance = distance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instructions")
    public RouteResponsePathInstructions[] instructions;
    public RouteResponsePath withInstructions(RouteResponsePathInstructions[] instructions) {
        this.instructions = instructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("points")
    public java.util.Map<String, Object> points;
    public RouteResponsePath withPoints(java.util.Map<String, Object> points) {
        this.points = points;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("points_encoded")
    public Boolean pointsEncoded;
    public RouteResponsePath withPointsEncoded(Boolean pointsEncoded) {
        this.pointsEncoded = pointsEncoded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("points_order")
    public Long[] pointsOrder;
    public RouteResponsePath withPointsOrder(Long[] pointsOrder) {
        this.pointsOrder = pointsOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapped_waypoints")
    public java.util.Map<String, Object> snappedWaypoints;
    public RouteResponsePath withSnappedWaypoints(java.util.Map<String, Object> snappedWaypoints) {
        this.snappedWaypoints = snappedWaypoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public Long time;
    public RouteResponsePath withTime(Long time) {
        this.time = time;
        return this;
    }
}