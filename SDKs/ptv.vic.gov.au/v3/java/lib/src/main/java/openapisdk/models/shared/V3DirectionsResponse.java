package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3DirectionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directions")
    public V3DirectionWithDescription[] directions;
    public V3DirectionsResponse withDirections(V3DirectionWithDescription[] directions) {
        this.directions = directions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public V3Status status;
    public V3DirectionsResponse withStatus(V3Status status) {
        this.status = status;
        return this;
    }
}