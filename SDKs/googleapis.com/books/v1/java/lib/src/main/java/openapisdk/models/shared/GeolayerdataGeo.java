package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GeolayerdataGeo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundary")
    public String[] boundary;
    public GeolayerdataGeo withBoundary(String[] boundary) {
        this.boundary = boundary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cachePolicy")
    public String cachePolicy;
    public GeolayerdataGeo withCachePolicy(String cachePolicy) {
        this.cachePolicy = cachePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryCode")
    public String countryCode;
    public GeolayerdataGeo withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public GeolayerdataGeo withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public GeolayerdataGeo withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mapType")
    public String mapType;
    public GeolayerdataGeo withMapType(String mapType) {
        this.mapType = mapType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewport")
    public GeolayerdataGeoViewport viewport;
    public GeolayerdataGeo withViewport(GeolayerdataGeoViewport viewport) {
        this.viewport = viewport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zoom")
    public Integer zoom;
    public GeolayerdataGeo withZoom(Integer zoom) {
        this.zoom = zoom;
        return this;
    }
}