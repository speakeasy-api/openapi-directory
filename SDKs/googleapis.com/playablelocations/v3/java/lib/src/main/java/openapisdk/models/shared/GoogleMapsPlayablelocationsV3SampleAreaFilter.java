package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleMapsPlayablelocationsV3SampleAreaFilter
 * Specifies the area to search for playable locations.
**/
public class GoogleMapsPlayablelocationsV3SampleAreaFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s2CellId")
    public String s2CellId;
    public GoogleMapsPlayablelocationsV3SampleAreaFilter withS2CellId(String s2CellId) {
        this.s2CellId = s2CellId;
        return this;
    }
}