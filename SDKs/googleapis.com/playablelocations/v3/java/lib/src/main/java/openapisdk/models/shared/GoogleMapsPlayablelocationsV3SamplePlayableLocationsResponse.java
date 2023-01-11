package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse
 *  Response for the SamplePlayableLocations method.
**/
public class GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationsPerGameObjectType")
    public java.util.Map<String, GoogleMapsPlayablelocationsV3SamplePlayableLocationList> locationsPerGameObjectType;
    public GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse withLocationsPerGameObjectType(java.util.Map<String, GoogleMapsPlayablelocationsV3SamplePlayableLocationList> locationsPerGameObjectType) {
        this.locationsPerGameObjectType = locationsPerGameObjectType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public String ttl;
    public GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse withTtl(String ttl) {
        this.ttl = ttl;
        return this;
    }
}