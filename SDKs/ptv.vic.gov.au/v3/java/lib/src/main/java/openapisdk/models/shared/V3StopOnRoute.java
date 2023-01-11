package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3StopOnRoute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disruption_ids")
    public Long[] disruptionIds;
    public V3StopOnRoute withDisruptionIds(Long[] disruptionIds) {
        this.disruptionIds = disruptionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_type")
    public Integer routeType;
    public V3StopOnRoute withRouteType(Integer routeType) {
        this.routeType = routeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_id")
    public Integer stopId;
    public V3StopOnRoute withStopId(Integer stopId) {
        this.stopId = stopId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_landmark")
    public String stopLandmark;
    public V3StopOnRoute withStopLandmark(String stopLandmark) {
        this.stopLandmark = stopLandmark;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_latitude")
    public Float stopLatitude;
    public V3StopOnRoute withStopLatitude(Float stopLatitude) {
        this.stopLatitude = stopLatitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_longitude")
    public Float stopLongitude;
    public V3StopOnRoute withStopLongitude(Float stopLongitude) {
        this.stopLongitude = stopLongitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_name")
    public String stopName;
    public V3StopOnRoute withStopName(String stopName) {
        this.stopName = stopName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_sequence")
    public Integer stopSequence;
    public V3StopOnRoute withStopSequence(Integer stopSequence) {
        this.stopSequence = stopSequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_suburb")
    public String stopSuburb;
    public V3StopOnRoute withStopSuburb(String stopSuburb) {
        this.stopSuburb = stopSuburb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_ticket")
    public V3StopTicket stopTicket;
    public V3StopOnRoute withStopTicket(V3StopTicket stopTicket) {
        this.stopTicket = stopTicket;
        return this;
    }
}