package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EventDistrictPoints {
    @JsonProperty("points")
    public java.util.Map<String, EventDistrictPointsPoints> points;
    public EventDistrictPoints withPoints(java.util.Map<String, EventDistrictPointsPoints> points) {
        this.points = points;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tiebreakers")
    public java.util.Map<String, EventDistrictPointsTiebreakers> tiebreakers;
    public EventDistrictPoints withTiebreakers(java.util.Map<String, EventDistrictPointsTiebreakers> tiebreakers) {
        this.tiebreakers = tiebreakers;
        return this;
    }
}