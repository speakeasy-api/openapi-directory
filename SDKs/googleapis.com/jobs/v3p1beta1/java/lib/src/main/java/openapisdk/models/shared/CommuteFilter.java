package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommuteFilter
 * Input only. Parameters needed for commute search.
**/
public class CommuteFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowImpreciseAddresses")
    public Boolean allowImpreciseAddresses;
    public CommuteFilter withAllowImpreciseAddresses(Boolean allowImpreciseAddresses) {
        this.allowImpreciseAddresses = allowImpreciseAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commuteMethod")
    public CommuteFilterCommuteMethodEnum commuteMethod;
    public CommuteFilter withCommuteMethod(CommuteFilterCommuteMethodEnum commuteMethod) {
        this.commuteMethod = commuteMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departureTime")
    public TimeOfDay departureTime;
    public CommuteFilter withDepartureTime(TimeOfDay departureTime) {
        this.departureTime = departureTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roadTraffic")
    public CommuteFilterRoadTrafficEnum roadTraffic;
    public CommuteFilter withRoadTraffic(CommuteFilterRoadTrafficEnum roadTraffic) {
        this.roadTraffic = roadTraffic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startCoordinates")
    public LatLng startCoordinates;
    public CommuteFilter withStartCoordinates(LatLng startCoordinates) {
        this.startCoordinates = startCoordinates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("travelDuration")
    public String travelDuration;
    public CommuteFilter withTravelDuration(String travelDuration) {
        this.travelDuration = travelDuration;
        return this;
    }
}