package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GeolayerdataGeoViewport
 * The viewport for showing this location. This is a latitude, longitude rectangle.
**/
public class GeolayerdataGeoViewport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hi")
    public GeolayerdataGeoViewportHi hi;
    public GeolayerdataGeoViewport withHi(GeolayerdataGeoViewportHi hi) {
        this.hi = hi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lo")
    public GeolayerdataGeoViewportLo lo;
    public GeolayerdataGeoViewport withLo(GeolayerdataGeoViewportLo lo) {
        this.lo = lo;
        return this;
    }
}