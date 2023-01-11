package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3DirectionWithDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction_id")
    public Integer directionId;
    public V3DirectionWithDescription withDirectionId(Integer directionId) {
        this.directionId = directionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction_name")
    public String directionName;
    public V3DirectionWithDescription withDirectionName(String directionName) {
        this.directionName = directionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_direction_description")
    public String routeDirectionDescription;
    public V3DirectionWithDescription withRouteDirectionDescription(String routeDirectionDescription) {
        this.routeDirectionDescription = routeDirectionDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_id")
    public Integer routeId;
    public V3DirectionWithDescription withRouteId(Integer routeId) {
        this.routeId = routeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_type")
    public Integer routeType;
    public V3DirectionWithDescription withRouteType(Integer routeType) {
        this.routeType = routeType;
        return this;
    }
}