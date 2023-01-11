package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GeoCoordsInput
 * Last known geolocation estimate of this object. Not guaranteed to be included in response.
**/
public class GeoCoordsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Double lat;
    public GeoCoordsInput withLat(Double lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lng")
    public Double lng;
    public GeoCoordsInput withLng(Double lng) {
        this.lng = lng;
        return this;
    }
}