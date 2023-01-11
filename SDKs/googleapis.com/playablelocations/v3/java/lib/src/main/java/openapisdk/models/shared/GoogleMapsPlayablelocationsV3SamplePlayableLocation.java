package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleMapsPlayablelocationsV3SamplePlayableLocation
 * A geographical point suitable for placing game objects in location-based games.
**/
public class GoogleMapsPlayablelocationsV3SamplePlayableLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("centerPoint")
    public GoogleTypeLatLng centerPoint;
    public GoogleMapsPlayablelocationsV3SamplePlayableLocation withCenterPoint(GoogleTypeLatLng centerPoint) {
        this.centerPoint = centerPoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleMapsPlayablelocationsV3SamplePlayableLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placeId")
    public String placeId;
    public GoogleMapsPlayablelocationsV3SamplePlayableLocation withPlaceId(String placeId) {
        this.placeId = placeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plusCode")
    public String plusCode;
    public GoogleMapsPlayablelocationsV3SamplePlayableLocation withPlusCode(String plusCode) {
        this.plusCode = plusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snappedPoint")
    public GoogleTypeLatLng snappedPoint;
    public GoogleMapsPlayablelocationsV3SamplePlayableLocation withSnappedPoint(GoogleTypeLatLng snappedPoint) {
        this.snappedPoint = snappedPoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("types")
    public String[] types;
    public GoogleMapsPlayablelocationsV3SamplePlayableLocation withTypes(String[] types) {
        this.types = types;
        return this;
    }
}