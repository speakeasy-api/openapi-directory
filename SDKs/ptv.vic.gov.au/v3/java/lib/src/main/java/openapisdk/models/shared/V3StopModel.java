package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3StopModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_type")
    public Integer routeType;
    public V3StopModel withRouteType(Integer routeType) {
        this.routeType = routeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_distance")
    public Float stopDistance;
    public V3StopModel withStopDistance(Float stopDistance) {
        this.stopDistance = stopDistance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_id")
    public Integer stopId;
    public V3StopModel withStopId(Integer stopId) {
        this.stopId = stopId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_landmark")
    public String stopLandmark;
    public V3StopModel withStopLandmark(String stopLandmark) {
        this.stopLandmark = stopLandmark;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_latitude")
    public Float stopLatitude;
    public V3StopModel withStopLatitude(Float stopLatitude) {
        this.stopLatitude = stopLatitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_longitude")
    public Float stopLongitude;
    public V3StopModel withStopLongitude(Float stopLongitude) {
        this.stopLongitude = stopLongitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_name")
    public String stopName;
    public V3StopModel withStopName(String stopName) {
        this.stopName = stopName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_sequence")
    public Integer stopSequence;
    public V3StopModel withStopSequence(Integer stopSequence) {
        this.stopSequence = stopSequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_suburb")
    public String stopSuburb;
    public V3StopModel withStopSuburb(String stopSuburb) {
        this.stopSuburb = stopSuburb;
        return this;
    }
}