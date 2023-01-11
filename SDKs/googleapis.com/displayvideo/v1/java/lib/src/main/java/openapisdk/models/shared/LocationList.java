package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationList
 * A list of locations used for targeting.
**/
public class LocationList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public LocationList withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public LocationList withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationListId")
    public String locationListId;
    public LocationList withLocationListId(String locationListId) {
        this.locationListId = locationListId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationType")
    public LocationListLocationTypeEnum locationType;
    public LocationList withLocationType(LocationListLocationTypeEnum locationType) {
        this.locationType = locationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LocationList withName(String name) {
        this.name = name;
        return this;
    }
}