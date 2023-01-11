package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleMapsPlayablelocationsV3SampleSpacingOptions
 * A set of options that specifies the separation between playable locations.
**/
public class GoogleMapsPlayablelocationsV3SampleSpacingOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minSpacingMeters")
    public Double minSpacingMeters;
    public GoogleMapsPlayablelocationsV3SampleSpacingOptions withMinSpacingMeters(Double minSpacingMeters) {
        this.minSpacingMeters = minSpacingMeters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pointType")
    public GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum pointType;
    public GoogleMapsPlayablelocationsV3SampleSpacingOptions withPointType(GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum pointType) {
        this.pointType = pointType;
        return this;
    }
}