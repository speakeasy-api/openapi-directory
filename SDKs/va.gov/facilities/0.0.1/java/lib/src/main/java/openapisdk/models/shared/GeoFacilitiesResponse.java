package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GeoFacilitiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public GeoFacility[] features;
    public GeoFacilitiesResponse withFeatures(GeoFacility[] features) {
        this.features = features;
        return this;
    }
    @JsonProperty("type")
    public GeoFacilitiesResponseTypeEnum type;
    public GeoFacilitiesResponse withType(GeoFacilitiesResponseTypeEnum type) {
        this.type = type;
        return this;
    }
}