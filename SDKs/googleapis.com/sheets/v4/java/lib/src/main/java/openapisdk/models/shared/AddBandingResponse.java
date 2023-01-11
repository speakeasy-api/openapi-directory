package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddBandingResponse
 * The result of adding a banded range.
**/
public class AddBandingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandedRange")
    public BandedRange bandedRange;
    public AddBandingResponse withBandedRange(BandedRange bandedRange) {
        this.bandedRange = bandedRange;
        return this;
    }
}