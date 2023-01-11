package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindMatchingLocationsResponse
 * Response message for Locations.FindMatchingLocations.
**/
public class FindMatchingLocationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchTime")
    public String matchTime;
    public FindMatchingLocationsResponse withMatchTime(String matchTime) {
        this.matchTime = matchTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchedLocations")
    public MatchedLocation[] matchedLocations;
    public FindMatchingLocationsResponse withMatchedLocations(MatchedLocation[] matchedLocations) {
        this.matchedLocations = matchedLocations;
        return this;
    }
}