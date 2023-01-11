package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleMapsPlayablelocationsV3SamplePlayableLocationList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locations")
    public GoogleMapsPlayablelocationsV3SamplePlayableLocation[] locations;
    public GoogleMapsPlayablelocationsV3SamplePlayableLocationList withLocations(GoogleMapsPlayablelocationsV3SamplePlayableLocation[] locations) {
        this.locations = locations;
        return this;
    }
}