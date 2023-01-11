package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleUpdatedLocation
 * Represents a location that was modified by Google.
**/
public class GoogleUpdatedLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diffMask")
    public String diffMask;
    public GoogleUpdatedLocation withDiffMask(String diffMask) {
        this.diffMask = diffMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Location location;
    public GoogleUpdatedLocation withLocation(Location location) {
        this.location = location;
        return this;
    }
}