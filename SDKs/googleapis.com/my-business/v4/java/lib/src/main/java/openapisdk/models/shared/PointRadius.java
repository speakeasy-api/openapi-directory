package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PointRadius
 * A radius around a particular point (latitude/longitude).
**/
public class PointRadius {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latlng")
    public LatLng latlng;
    public PointRadius withLatlng(LatLng latlng) {
        this.latlng = latlng;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusKm")
    public Float radiusKm;
    public PointRadius withRadiusKm(Float radiusKm) {
        this.radiusKm = radiusKm;
        return this;
    }
}