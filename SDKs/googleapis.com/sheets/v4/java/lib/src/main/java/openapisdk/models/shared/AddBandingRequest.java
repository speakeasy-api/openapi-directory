package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddBandingRequest
 * Adds a new banded range to the spreadsheet.
**/
public class AddBandingRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandedRange")
    public BandedRange bandedRange;
    public AddBandingRequest withBandedRange(BandedRange bandedRange) {
        this.bandedRange = bandedRange;
        return this;
    }
}