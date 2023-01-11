package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleMapsPlayablelocationsV3SampleFilter
 * Specifies the filters to use when searching for playable locations.
**/
public class GoogleMapsPlayablelocationsV3SampleFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedTypes")
    public String[] includedTypes;
    public GoogleMapsPlayablelocationsV3SampleFilter withIncludedTypes(String[] includedTypes) {
        this.includedTypes = includedTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxLocationCount")
    public Integer maxLocationCount;
    public GoogleMapsPlayablelocationsV3SampleFilter withMaxLocationCount(Integer maxLocationCount) {
        this.maxLocationCount = maxLocationCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spacing")
    public GoogleMapsPlayablelocationsV3SampleSpacingOptions spacing;
    public GoogleMapsPlayablelocationsV3SampleFilter withSpacing(GoogleMapsPlayablelocationsV3SampleSpacingOptions spacing) {
        this.spacing = spacing;
        return this;
    }
}