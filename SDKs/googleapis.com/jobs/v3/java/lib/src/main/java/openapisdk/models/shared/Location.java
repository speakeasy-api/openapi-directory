package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Location
 * Output only. A resource that represents a location with full geographic information.
**/
public class Location {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latLng")
    public LatLng latLng;
    public Location withLatLng(LatLng latLng) {
        this.latLng = latLng;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationType")
    public LocationLocationTypeEnum locationType;
    public Location withLocationType(LocationLocationTypeEnum locationType) {
        this.locationType = locationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalAddress")
    public PostalAddress postalAddress;
    public Location withPostalAddress(PostalAddress postalAddress) {
        this.postalAddress = postalAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusInMiles")
    public Double radiusInMiles;
    public Location withRadiusInMiles(Double radiusInMiles) {
        this.radiusInMiles = radiusInMiles;
        return this;
    }
}