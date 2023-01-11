package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3StoppingPatternStop {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_type")
    public Integer routeType;
    public V3StoppingPatternStop withRouteType(Integer routeType) {
        this.routeType = routeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_distance")
    public Float stopDistance;
    public V3StoppingPatternStop withStopDistance(Float stopDistance) {
        this.stopDistance = stopDistance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_id")
    public Integer stopId;
    public V3StoppingPatternStop withStopId(Integer stopId) {
        this.stopId = stopId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_landmark")
    public String stopLandmark;
    public V3StoppingPatternStop withStopLandmark(String stopLandmark) {
        this.stopLandmark = stopLandmark;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_latitude")
    public Float stopLatitude;
    public V3StoppingPatternStop withStopLatitude(Float stopLatitude) {
        this.stopLatitude = stopLatitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_longitude")
    public Float stopLongitude;
    public V3StoppingPatternStop withStopLongitude(Float stopLongitude) {
        this.stopLongitude = stopLongitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_name")
    public String stopName;
    public V3StoppingPatternStop withStopName(String stopName) {
        this.stopName = stopName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_sequence")
    public Integer stopSequence;
    public V3StoppingPatternStop withStopSequence(Integer stopSequence) {
        this.stopSequence = stopSequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_suburb")
    public String stopSuburb;
    public V3StoppingPatternStop withStopSuburb(String stopSuburb) {
        this.stopSuburb = stopSuburb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_ticket")
    public V3StopTicket stopTicket;
    public V3StoppingPatternStop withStopTicket(V3StopTicket stopTicket) {
        this.stopTicket = stopTicket;
        return this;
    }
}