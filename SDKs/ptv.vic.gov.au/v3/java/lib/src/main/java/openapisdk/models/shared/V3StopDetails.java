package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3StopDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disruption_ids")
    public Long[] disruptionIds;
    public V3StopDetails withDisruptionIds(Long[] disruptionIds) {
        this.disruptionIds = disruptionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_type")
    public Integer routeType;
    public V3StopDetails withRouteType(Integer routeType) {
        this.routeType = routeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routes")
    public java.util.Map<String, Object>[] routes;
    public V3StopDetails withRoutes(java.util.Map<String, Object>[] routes) {
        this.routes = routes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("station_description")
    public String stationDescription;
    public V3StopDetails withStationDescription(String stationDescription) {
        this.stationDescription = stationDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("station_type")
    public String stationType;
    public V3StopDetails withStationType(String stationType) {
        this.stationType = stationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_accessibility")
    public V3StopAccessibility stopAccessibility;
    public V3StopDetails withStopAccessibility(V3StopAccessibility stopAccessibility) {
        this.stopAccessibility = stopAccessibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_amenities")
    public V3StopAmenityDetails stopAmenities;
    public V3StopDetails withStopAmenities(V3StopAmenityDetails stopAmenities) {
        this.stopAmenities = stopAmenities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_id")
    public Integer stopId;
    public V3StopDetails withStopId(Integer stopId) {
        this.stopId = stopId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_landmark")
    public String stopLandmark;
    public V3StopDetails withStopLandmark(String stopLandmark) {
        this.stopLandmark = stopLandmark;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_location")
    public V3StopLocation stopLocation;
    public V3StopDetails withStopLocation(V3StopLocation stopLocation) {
        this.stopLocation = stopLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_name")
    public String stopName;
    public V3StopDetails withStopName(String stopName) {
        this.stopName = stopName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stop_staffing")
    public V3StopStaffing stopStaffing;
    public V3StopDetails withStopStaffing(V3StopStaffing stopStaffing) {
        this.stopStaffing = stopStaffing;
        return this;
    }
}