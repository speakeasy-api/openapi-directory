package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationFilter
 * Input only. Geographic region of the search.
**/
public class LocationFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public LocationFilter withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distanceInMiles")
    public Double distanceInMiles;
    public LocationFilter withDistanceInMiles(Double distanceInMiles) {
        this.distanceInMiles = distanceInMiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latLng")
    public LatLng latLng;
    public LocationFilter withLatLng(LatLng latLng) {
        this.latLng = latLng;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCode")
    public String regionCode;
    public LocationFilter withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telecommutePreference")
    public LocationFilterTelecommutePreferenceEnum telecommutePreference;
    public LocationFilter withTelecommutePreference(LocationFilterTelecommutePreferenceEnum telecommutePreference) {
        this.telecommutePreference = telecommutePreference;
        return this;
    }
}