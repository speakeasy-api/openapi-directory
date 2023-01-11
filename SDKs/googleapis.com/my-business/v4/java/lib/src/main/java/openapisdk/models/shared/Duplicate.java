package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Duplicate
 * Information about the location that this location duplicates.
**/
public class Duplicate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access")
    public DuplicateAccessEnum access;
    public Duplicate withAccess(DuplicateAccessEnum access) {
        this.access = access;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationName")
    public String locationName;
    public Duplicate withLocationName(String locationName) {
        this.locationName = locationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placeId")
    public String placeId;
    public Duplicate withPlaceId(String placeId) {
        this.placeId = placeId;
        return this;
    }
}