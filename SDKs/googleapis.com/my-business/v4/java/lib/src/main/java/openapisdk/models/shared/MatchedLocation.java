package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MatchedLocation
 * Represents a possible match to a location.
**/
public class MatchedLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isExactMatch")
    public Boolean isExactMatch;
    public MatchedLocation withIsExactMatch(Boolean isExactMatch) {
        this.isExactMatch = isExactMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Location location;
    public MatchedLocation withLocation(Location location) {
        this.location = location;
        return this;
    }
}